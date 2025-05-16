import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();
  const { imgSrc, title, price } = location.state;

  return (
    <div>
      <h1>{title}</h1>
      <img src={imgSrc} alt={title} style={{ width: '200px', height: '200px' }} />
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetails;