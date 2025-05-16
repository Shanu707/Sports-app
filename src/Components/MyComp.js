
import React from 'react';

const MyComp = ({ id, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default MyComp;
