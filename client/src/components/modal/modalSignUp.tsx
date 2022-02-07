import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { IPropsModal } from '../../shared/interfaces';

function ModalSignUp({ show, setState }: IPropsModal): JSX.Element {
  const handleClose = (): void => setState(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>SIGN UP</Modal.Title>
      </Modal.Header>
      <Modal.Body />
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalSignUp;
