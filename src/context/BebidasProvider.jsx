import { createContext, useState } from "react"
import axios from "axios";


//Creando el contexto
const BebidasContext = createContext();

//Creando el provider
const BebidasProvider = ({children}) => {
    //state para guardar la bebida
    const [bebidas, setBebidas] = useState([]);

    //state para cargar el spinner
    const [cargando, setCargando] = useState(false);

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

  return (
    <BebidasContext.Provider value={{consultarBebida, bebidas, cargando}}>
        {children}
    </BebidasContext.Provider>
  );
};


export {BebidasContext, BebidasProvider};