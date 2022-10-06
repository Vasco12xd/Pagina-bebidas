import { useContext } from "react";
import { Row, Spinner } from "react-bootstrap";

// importamos bebidas contexto
import { BebidasContext } from "../context/BebidasProvider";
import { Bebidas } from "./Bebidas";



const ListadoBebidas = () => {
  //accediendo al state de bebidas y cargando del context de bebidas
  const { cargando } = useContext(BebidasContext);



  return (
    <Row className="justify-content-center mt-5">
      {
        //si cargando es true, mostramos el spinner
        cargando && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )
      }
      {
        //cambiar acá el codigo
      }
      <Bebidas />
      
        
      
    </Row>
  );
};

export { ListadoBebidas };
