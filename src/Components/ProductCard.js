// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';

// const ProductCard = ({ id, imgSrc, title, price }) => (
//   <div className='div1'>
//     <Card className='card-container'>
//       <Card.Img className='product-img' variant="top" src={imgSrc} />
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>Price: ${price.toFixed(2)}</Card.Text>
//         {/* Corrected Link to Buy Now */}
//         <Link
//           to={{
//             pathname: /buynow/${id},
//             state: { id, imgSrc, title, price }
//           }}
//           className="btn btn-primary"
//         >
//           Buy now
//         </Link>
//       </Card.Body>
//     </Card>
//   </div>
// );


// export default ProductCard;