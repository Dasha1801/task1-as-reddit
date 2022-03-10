import React from 'react';
import './optionsGroup.scss';

function OptionsGroup(): JSX.Element {
  return (
    <div className="groupOptions">
      <span className="itemOption delete">Удалить</span>
      <span className="itemOption save">В избранное</span>
    </div>
  );
}

export default OptionsGroup;
