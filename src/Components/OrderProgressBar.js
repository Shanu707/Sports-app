import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './OrderProgressBar.css';

const steps = [
  { label: 'Order Placed', completed: true },
  { label: 'Packed', completed: false },
  { label: 'Shipped', completed: false },
  { label: 'Delivered', completed: false },
];

const colors = ['#007bff', '#28a745', '#ffc107', '#dc3545']; // Array of colors for each step

const OrderProgressBar = ({ currentStep }) => {
  return (
    <Container className="progress-container">
      <Row className="vertical-row">
        {steps.map((step, index) => (
          <Col key={index} className={`step ${index <= currentStep ? 'completed' : ''}`}>
            <Card className="step-card" style={{ backgroundColor: colors[index] }}>
              <Card.Body>
                <div className="step-icon">{index + 1}</div>
                <div className="step-label">{step.label}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="vertical-progress-bar">
        <div
          className="progress-bar-fill"
          style={{ height: `${((currentStep + 1) / steps.length) * 100}%` }}
        ></div>
      </div>
    </Container>
  );
};

export default OrderProgressBar;
