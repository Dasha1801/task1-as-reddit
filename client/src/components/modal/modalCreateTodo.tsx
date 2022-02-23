import React from 'react';
import { Modal } from 'react-bootstrap';
import FormCreateTask from '../forms/formCreateTask';
import { IPropsModal } from '../../shared/interfaces';

function ModalCreateToDo({ show, setState }: IPropsModal): JSX.Element {
  const handleClose = (): void => setState(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create new task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormCreateTask />
      </Modal.Body>
    </Modal>
  );
}

export default ModalCreateToDo;
