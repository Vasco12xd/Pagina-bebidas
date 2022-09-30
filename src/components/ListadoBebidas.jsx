import { useContext, } from "react"
import { Card, Row, Spinner,Button, Col } from "react-bootstrap"

// importamos bebidas contexto
import { BebidasContext } from "../context/BebidasProvider"

const ListadoBebidas = () => {

    //accediendo al state de bebidas y cargando del context de bebidas
    const { bebidas, cargando } = useContext(BebidasContext)


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
            //Tarea hacer un componente con todas las cards de bebidas
            //iterando sobre las bebidas
            bebidas.map((bebida) => (
                <Col md={6} lg={3} >
                <Card className="mb-5">
                <Card.Title className="text-center p-2">{bebida.strDrink}</Card.Title>
                    <Card.Img variant="top" src={bebida.strDrinkThumb} />
                    <Card.Body>
                        
                        <Button variant="success" className="w-100">Ver mas</Button>
                    </Card.Body>    
                </Card>
                </Col>
            ))
        }
        </Row>
    );
};

export {ListadoBebidas}