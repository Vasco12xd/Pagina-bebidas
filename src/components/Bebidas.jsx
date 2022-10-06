import { useContext } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { BebidasContext } from "../context/BebidasProvider";

const Bebidas = ({ bebida }) => {
  const { bebidasDinamico, handleClickBebida, handleClickModal } =
    useContext(BebidasContext);

  return bebidasDinamico.map((bebida) => (
    <Col md={6} lg={3}>
      <Card className="mb-5">
        <Card.Title className="text-center p-2">{bebida.strDrink}</Card.Title>
        <Card.Img variant="top" src={bebida.strDrinkThumb} />
        <Card.Body>
          <Button
            variant="success"
            className="w-100"
            onClick={() => {
              handleClickBebida(bebida.idDrink);
              handleClickModal();
            }}
          >
            Ver más
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));
};

export { Bebidas };
