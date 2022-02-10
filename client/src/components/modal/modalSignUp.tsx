import React from 'react';
import { Modal } from 'react-bootstrap';
import FormSignUp from '../forms/formSignUp';
import { IPropsModal } from '../../shared/interfaces';

function ModalSignUp({ show, setState }: IPropsModal): JSX.Element {
  const handleClose = (): void => setState(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>SIGN UP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormSignUp setState={setState} />
      </Modal.Body>
    </Modal>
  );
}

export default ModalSignUp;
