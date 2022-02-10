import React from 'react';
import { Alert } from 'react-bootstrap';

interface IAlert {
  variant: string;
  text: string;
}

function BaseAlert({ variant, text }: IAlert): JSX.Element {
  return (
    <Alert variant={variant} style={{ marginTop: '10px' }}>
      <span>{text}</span>
    </Alert>
  );
}

export default BaseAlert;
