import React from 'react';
import OrderProgressBar from './OrderProgressBar'; 
import { useLocation } from 'react-router-dom';

const OrderConfirmation = () => {
  const location = useLocation();
  const deliveryDate = location.state?.deliveryDate;
  console.log(deliveryDate);
  return (
    <div>
      <h1>Your order has been successfully placed!</h1>
      <p>Expected delivery date: {deliveryDate}</p>
      <OrderProgressBar />
    </div>
  );
};

export default OrderConfirmation;
