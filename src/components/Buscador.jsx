import React, { useState, useContext } from "react";
import { BiSearchAlt } from "react-icons/bi";

//importando el contexto de bebidas
import { BebidasContext } from "../context/BebidasProvider";

const Buscador = () => {
  //state para guardar lo que el usuario escribe
  const [busqueda, setBusqueda] = useState("");

  //accediendo al state de bebidas y cargando del context de bebidas
  const { bebidas, setBebidasDinamico } = useContext(BebidasContext);

  //funcion que se ejecuta cada vez que el usuario escribe
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filterBebidas(e.target.value);
  };

  //Funcion para filtrar los productos
  const filterBebidas = (value) => {
    let result = bebidas.filter((bebida) => {
      if (bebida.strDrink.toLowerCase().includes(value.toLowerCase())) {
        return bebida;
      }
    });
    setBebidasDinamico(result);
  };

  return (
    <div className="d-flex justify-content-center align-items-center position-relative">
      <input
        className="d-block w-75 p-2 border-5 rounded-2"
        type="text"
        value={busqueda}
        onChange={handleChange}
        placeholder="Ingrese el nombre de la bebida"
      />
      <BiSearchAlt
        className="position-absolute"
        style={{ right: "14%" }}
        size={30}
      />
    </div>
  );
};

export default Buscador;
