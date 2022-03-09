import React from 'react';
import './infoProduct.scss';

function InfoProduct(): JSX.Element {
  return (
    <div className="info">
      <div className="named">
        <h3 className="nameProduct">Смартфон Apple iPhone 11 64GB / MHDF3 (фиолетовый)</h3>
        <h5 className="codeProduct">Код товара: 6.267.216</h5>
      </div>
      <div className="counterProduct">
        <div className="iconProduct remove" />
        <div className="countProduct">1</div>
        <div className="iconProduct add" />
      </div>
      <h5 className="price">
        2 099,<span className="kopecks">00 р.</span>
      </h5>
    </div>
  );
}

export default InfoProduct;
