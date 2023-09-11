import { Image, Modal } from "react-bootstrap";
import { useBebidas } from "../hooks/useBebidas";

export const ModalBebida = () => {
  const { modal, handleModalClick, receta, cargando } = useBebidas();
  const { strDrinkThumb, strDrink, strInstructions } = receta;

  const mostrarIngredientes = () => {
    let ingredientes = [];

    for (let i = 1; i < 16; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={i}>
            {receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };

  return (
    !cargando && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image src={strDrinkThumb} alt={strDrink} />
        <Modal.Header>
          <Modal.Title>{strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Instrucciones</h2>
            {strInstructions}
            <h3>Ingredientes y Cantidades</h3>
            {mostrarIngredientes()}
          </div>
        </Modal.Body>
      </Modal>
    )
  );
};
