import React from 'react';
import { Alert } from 'react-bootstrap';
import { IAlert } from '../../shared/interfaces';
import './alert.scss';

function BaseAlert({ ...props }: IAlert): JSX.Element {
  const { text, setState, variant } = props;

  return (
    <Alert variant={variant} onClose={() => setState(false)} dismissible className="alert">
      <p className="text">{text}</p>
    </Alert>
  );
}

export default BaseAlert;
