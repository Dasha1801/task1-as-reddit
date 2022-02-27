import React from 'react';
import { Modal } from 'react-bootstrap';
import { IPropsModal } from '../../shared/interfaces';
import FormLogIn from '../forms/formLogIn';
import SocialButtons from '../authSocialButtons/socialButtons';
import { route } from '../../utils';

function ModalLogIn({ show, setState }: IPropsModal): JSX.Element {
  const handleClose = (): void => setState(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title data-testid="modalTitle">LOG IN</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormLogIn />
        <SocialButtons action={route.logIn} />
      </Modal.Body>
    </Modal>
  );
}

export default ModalLogIn;
