import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { BebidasContext } from "../context/BebidasProvider";

function ModalBebida() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 const { modal, handleClickModal } = useContext(BebidasContext)

  return (
    <>
      <Modal show={modal} onHide={handleClickModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClickModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

render({ ModalBebida });