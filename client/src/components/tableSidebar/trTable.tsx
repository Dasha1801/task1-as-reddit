import React from 'react';
import { IPropsTrTable } from '../../shared/interfaces';
import './table.scss';

function TrTable({ item }: IPropsTrTable): JSX.Element {
  return (
    <>
      <div className="tr">{item.date}</div>
      <div className="tr">{item.organizers} </div>
      <div className="tr">{item.network}</div>
    </>
  );
}

export default TrTable;
