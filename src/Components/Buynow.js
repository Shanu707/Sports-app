import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const BuyNow = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const imgSrc = queryParams.get('imgSrc');
  const title = queryParams.get('title'); 
  const price = queryParams.get('price');

  const [quantity, setQuantity] = useState(1);
  const [shippingDetails, setShippingDetails] = useState('');

  console.log('ID:', id);
  console.log('Image Source:', imgSrc);
  console.log('Title:', title);
  console.log('Price:', price);

  if (!imgSrc || !title || !price) {
    return <div>Invalid product information.</div>;
  }

  const handlePurchase = () => {
    const deliveryDate = calculateDeliveryDate(5); // Calculate delivery date here
    navigate('/order-confirmation', { state: { deliveryDate } });
  };

  

  const calculateDeliveryDate = (daysToAdd) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + daysToAdd);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString(undefined, options);
  };

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Price: ${parseFloat(price).toFixed(2)}</Card.Text>
          <Form.Group controlId="formShippingDetails" className="mt-3">
            <Form.Label>Shipping Details</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your address"
              value={shippingDetails}
              onChange={(e) => setShippingDetails(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formQuantity" className="mt-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
            />
          </Form.Group>
          <Link
            to="/order-confirmation"
            state={{ deliveryDate: calculateDeliveryDate(5) }} // Pass delivery date as state
            className="btn btn-primary"
            onClick={handlePurchase}
          >
            Buy now
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BuyNow;
