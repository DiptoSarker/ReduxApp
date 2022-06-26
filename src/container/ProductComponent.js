import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { title } = products[0];
  return (
    <div className="hy">
      <div className="four column wide">
        <div className="ui link cards">
          <div className="card">
            <div className="image"></div>
            <div className="content">
              <div className="header">{title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
