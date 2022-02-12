import React from 'react';
import { Alert } from 'react-bootstrap';
import { IAlert } from '../../shared/interfaces';
import './alert.scss';

function ErrorAlert({ ...props }: IAlert): JSX.Element {
  const { text, setState, variant } = props;

  return (
    <Alert variant={variant} onClose={() => setState(false)} dismissible className="errorAlert">
      <p className="warning">{text}</p>
    </Alert>
  );
}

export default ErrorAlert;
