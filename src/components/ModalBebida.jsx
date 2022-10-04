import React, { useState, useContext } from 'react';                      
import Button from 'react-bootstrap/Button';                  
import {Modal, Image} from 'react-bootstrap';


import { BebidasContext } from "../context/BebidasProvider";

function ModalBebida() {
  const [show, setShow] = useState(false);

 const { modal, handleClickModal, receta, cargandoModal } = useContext(BebidasContext)

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
        </Modal.Body>
      </Modal>
    </>  
  )
  );
}

export { ModalBebida };