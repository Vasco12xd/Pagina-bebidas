import React, { useContext } from 'react';        
import {Modal, Image} from 'react-bootstrap';


import { BebidasContext } from "../context/BebidasProvider";

function ModalBebida() {
 const { modal, handleClickModal, receta, cargandoModal } = useContext(BebidasContext)

  let ingredientes = [];

  for (let i = 1; i < 16; i++) {
    if (receta[`strIngredient${i}`]) {
      ingredientes.push(
        <li>
          {receta[`strIngredient${i}`]} - {receta[`strMeasure${i}`]}
        </li>
      );
    }
  }

  return (
    !cargandoModal && (
      <>
      <Modal show={modal} onHide={handleClickModal}>
      
        <Modal.Header closeButton>   
          <Modal.Title>{receta.strDrink}</Modal.Title>                 
        </Modal.Header>      
        <Modal.Body>
         <Image
          src={receta.strDrinkThumb} 
          alt={`Image ${receta.strDrink}`}
          className="img-fluid"
          padding="10px"
          />  
          <h3 className="mt-4">ingredientes</h3>
          <ul>
            {ingredientes}
          </ul>
          
        </Modal.Body>
      </Modal>
    </>  
  )
  );
}

export { ModalBebida, };