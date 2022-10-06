import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useState, useContext } from "react";

//contexto, permite acceder al contexto
import { CategoriaContext } from "../context/CategoriaProvider";

import { BebidasContext } from "../context/BebidasProvider";

import Buscador from "./Buscador";

const formulario = () => {
  //state para controlar el estado de los formularios

  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  //state para manejar alerta
  const [alerta, setAlerta] = useState(null);

  //Accediendo a lo values de los contextProviders
  const { categorias } = useContext(CategoriaContext);
  const { consultarBebida } = useContext(BebidasContext);

  //para setear el valor de una sin el split operator
  // const [nombre, setNombre] = useState('');

  //Funcion para consultar y validar la bebida
  const handleSubmit = (e) => {
    e.preventDefault();
    //validamos que los campos no esten vacios
    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }
    setAlerta("");

    //consultar bebidas
    consultarBebida(busqueda);
  };

  return (
    <form
      //Funcion que se ejecuta al enviar formulario
      onSubmit={handleSubmit}
    >
      {
        //si alerta es true, mostramos el error
        alerta && (
          <Alert variant="danger" className="text-center">
            {alerta}
          </Alert>
        )
      }
      <Row>
        {/* Sm es para los 12 espacios y en mediano "md"
 va a tomar 6 */}
        <Col sm={12} md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre bebidas</Form.Label>
            <Form.Control
              id="nombre"
              type="text"
              name="nombre"
              placeholder="Margarita"
              //valor que tenga el nombre en el state de busqueda
              value={busqueda.nombre}
              //actualiza el state de busqueda
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                  /* setNombre (e.target.value) */
                })
              }
            />
          </Form.Group>
        </Col>
        <Col sm={12} md={6}>
          <Form.Group>
            <Form.Label htmlFor="categoria">Categoria bebida</Form.Label>
            <Form.Select
              id="categoria"
              name="categoria"
              //Valor que tenga la categoria en el state de busqueda
              value={busqueda.categoria}
              //Actualiza el state de categoria cada que el usuario seleccione algo
              onChange={(e) =>
                setBusqueda({
                  ...setBusqueda,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>Seleccione Categoria</option>
              {categorias.map((categoria) => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col sm={12} md={3}>
          <Button
            variant="secondary"
            className="text-uppercase w-100"
            type="submit"
          >
            Buscar bebida
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="mt-3">
          <Buscador />
        </Col>
      </Row>
    </form>
  );
};

export default formulario;
