import React from 'react';
import { Modal } from 'react-bootstrap';
import { IPropsModal } from '../../shared/interfaces';
import FormLogIn from '../forms/formLogIn';

function ModalLogIn({ show, setState }: IPropsModal): JSX.Element {
  const handleClose = (): void => setState(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>LOG IN</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormLogIn />
      </Modal.Body>
    </Modal>
  );
}

export default ModalLogIn;
