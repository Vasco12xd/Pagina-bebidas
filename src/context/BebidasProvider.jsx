import { createContext, useState } from "react"
import axios from "axios";
import { useEffect } from "react";


//Creando el contexto
const BebidasContext = createContext();

//Creando el provider
const BebidasProvider = ({children}) => {
    //state para guardar la bebida
    const [bebidas, setBebidas] = useState([]);

    //state para cargar el spinner
    const [cargando, setCargando] = useState(false);

    //state para cargar info modal
    const [cargandoModal, setCargandoModal] = useState(false);

    //state para abrir o cerrar el modal
    const [modal, setModal] = useState(false);

    //state de la bebida seleccionada
    const [idBebidaActual, setIdBebidaActual] = useState("");

    //state de la receta de la bebida seleccionada
    const [receta, setReceta] = useState({});

    //useEffect se ejecuta cuando pasa alguna cosa
    useEffect (() => {
        setCargandoModal(true);
        //indicar que el modal va a cargar la informacion
        const obtenerReceta = async () => {
            //validar si existe labebida
            if (!idBebidaActual) return;
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idBebidaActual}`;
                const data = await axios.get(url);
                setReceta(data.data.drinks[0]);
            } catch (error) {
                 console.log(error);   
            } finally {
                setCargandoModal(false);
            }
    };
    obtenerReceta();
    },[idBebidaActual]);

    //Funcion para consultar la bebida
    const consultarBebida = async (datos) => {
        try {
            //actualizamos el state de cargando 
            setCargando(true);

            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;
            
            const {data} = await axios.get(url);
            setBebidas(data.drinks);

            //actualizamos el state de cargando 
            setCargando(false);
        } catch (error) {
            console.log(error);
        }
    };

    //Funcion para actualizar el valor de id bebida actual
    const handleClickBebida = (id) => {
        //actualizamos el state de idBebidaActual
        setIdBebidaActual(id);
    };

    const handleClickModal = () => {
        //actualizamos el state de modal
        setModal(!modal);
    };

  return (
    <BebidasContext.Provider value={{
        consultarBebida,
        bebidas,
        cargando,
        handleClickBebida,
        handleClickModal,
        modal,
        receta,
        cargandoModal,
        }}>
        {children}
    </BebidasContext.Provider>
  );
};


export {BebidasContext, BebidasProvider};