import { Button, Card, Col } from "react-bootstrap";
import { useBebidas } from "../hooks/useBebidas";

export const Bebida = ({ bebida }) => {
  const { handleModalClick, handleBebidaIdClick } = useBebidas();
  const { strDrink, idDrink, strDrinkThumb } = bebida;

  return (
    <>
      <Col md={6} lg={3}>
        <Card className="mt-5">
          <Card.Img
            variant="img"
            src={strDrinkThumb}
            alt={`Imagen de ${strDrink}`}
          />

          <Card.Body>
            <Card.Title>{strDrink}</Card.Title>

            <Button
              className="w-100 text-uppercase mt-2 fw-bold"
              variant="warning"
              onClick={() => {
                handleModalClick();
                handleBebidaIdClick(idDrink);
              }}
            >
              Ver Receta
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
