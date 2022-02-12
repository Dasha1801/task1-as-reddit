import React from 'react';
import { Button } from 'react-bootstrap';

function FormBtns(): JSX.Element {
  return (
    <div className="buttons">
      <Button className="btn-danger mt-3" type="reset">
        Reset
      </Button>
      <Button type="submit" className="mt-3 buttonSubmit">
        Submit
      </Button>
    </div>
  );
}

export default FormBtns;
