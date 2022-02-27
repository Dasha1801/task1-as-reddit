import React from 'react';
import { Modal } from 'react-bootstrap';
import FormUpdateTask from '../forms/formUpdateTask';
import { IPropsModalUpdate } from '../../shared/interfaces';

function ModalUpdateTask({ show, setState, item, columnId, column }: IPropsModalUpdate): JSX.Element {
  const handleClose = (): void => setState(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Do you update task?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormUpdateTask item={item} columnId={columnId} column={column} handleClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
}

export default ModalUpdateTask;
