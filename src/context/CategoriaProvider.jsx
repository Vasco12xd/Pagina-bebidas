import { createContext, useState, useEffect } from "react";
import axios from "axios";

//Creando el contexto
//permite a los demás componentes acceder a este contexto
const CategoriaContext = createContext();

//Provider permite a los componentes hijos acceder al state
const CategoriaProvider = ({ children }) => {
  //state de categorias
  const [categorias, setCategorias] = useState([]);

  //useEffect que se ejecuta cada que renderiza(carga) el componente
  useEffect(() => {
    obtenerCategorias();
  }, []);

  //Funcionar para obtener categorias de la API
  const obtenerCategorias = async () => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      //Consultar data de la API

      const { data } = await axios.get(url);
      setCategorias(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CategoriaContext.Provider value={{ categorias }}>
      {children}
    </CategoriaContext.Provider>
  );
};

export { CategoriaContext, CategoriaProvider };
