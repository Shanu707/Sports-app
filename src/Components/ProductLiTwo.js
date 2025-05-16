import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

const BuyNow = (handleBuyNow) => {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();
  
  const { imgSrc, title, price } = location.state;
  console.log(imgSrc)

  const handlePurchase = () => {
    // Create an object with the product details
    const productDetails = {
      id,
      imgSrc,
      title,
      price
    };

    // Call the handleBuyNow function with the product details
    handleBuyNow(productDetails);

    // Navigate to the next page with the product details in the route state
    history.push(`/product/${id}`, { state: productDetails });
  };

  return (
    <div>
      <h1>{title}</h1>
      <img src={imgSrc} alt={title} style={{ width: '200px', height: '200px' }} />
      <p>ID: {id}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <button onClick={handlePurchase} className="btn btn-primary">
        Buy Now
      </button>
    </div>
  );
};

export default BuyNow;