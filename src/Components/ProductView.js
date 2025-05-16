
import React from 'react';
import MyComp from './MyComp';

const ProductView = () => {
  return (
    <div>
      <MyComp id="12345" title="My Title" />
      <MyComp id="67890" title="Another Title" />
    </div>
  );
};

export default ProductView;
