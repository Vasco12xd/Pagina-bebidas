import { useContext } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { BebidasContext } from "../context/BebidasProvider";

const Bebidas = () => {
  const { bebidas } = useContext(BebidasContext)
  return (
      bebidas.map((bebida) => (
      <Col md={6} lg={3}>
      <Card className="mb-5">
        <Card.Title className="text-center p-2">
          {bebida.strDrink}
        </Card.Title>
        <Card.Img variant="top" src={bebida.strDrinkThumb} />
        <Card.Body>
          <Button variant="success" className="w-100">
            Ver mas
          </Button>
        </Card.Body>
      </Card>
    </Col>
      ))
    
  );
}

export { Bebidas };