import React from 'react';
import { Modal } from 'react-bootstrap';
import { IPropsModal } from '../../shared/interfaces';
import FormUpdate from '../forms/formUpdate';

function ModalUpdate({ show, setState }: IPropsModal): JSX.Element {
  const handleClose = (): void => setState(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update user profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormUpdate />
      </Modal.Body>
    </Modal>
  );
}

export default ModalUpdate;
