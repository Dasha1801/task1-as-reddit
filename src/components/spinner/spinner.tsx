import React from 'react';
import LoadingSpin from 'react-loading-spin';
import './spinner.scss';

function Spinner():JSX.Element {
  return (

    <div className="parentLoader">
      <LoadingSpin
        size="150px"
        primaryColor="#33a8ff"
        secondaryColor="gray"
      />
    </div>

  );
}

export default Spinner;
