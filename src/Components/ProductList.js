import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';

                                                                                                    
const ProductCard = ({ id, imgSrc, title, price }) => (                                                                                            
  <div className='div1'>
    <Card className='card-container'>
      <Card.Img className='product-img' variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price: ${price.toFixed(2)}</Card.Text>
        <Link
          to={`/buynow/${id}?imgSrc=${encodeURIComponent(imgSrc)}&title=${encodeURIComponent(title)}&price=${price.toFixed(2)}`}
          className="btn btn-primary"
        >            
          Buy now       
        </Link>
      </Card.Body>
    </Card>
  </div>
);





const ProductList = () => {
  const [numOfCards] = useState(14); // Number of cards to display
  const [products] = useState([
    { id: 1, imgSrc: "https://5.imimg.com/data5/SELLER/Default/2021/8/VD/EZ/DM/7500814/nivia-air-strike-football-1000x1000.png", title: "Nivia Ashtang", price: 400.00 },
    { id: 2, imgSrc: "https://rukminim1.flixcart.com/image/416/416/k2c6rgw0/ball/k/x/6/400-425-5-22-shining-star-1-fb-292-football-nivia-original-imafhphtwzmgghcz.jpeg?q=70", title: "Nivia Shining Star", price: 950.00 },
    { id: 3, imgSrc: "https://rukminim1.flixcart.com/image/416/416/kc29n680/ball/z/w/g/400-dominator-2-0-22-5-1-fb-80082-football-nivia-original-imaft9rcbvzurjgg.jpeg?q=70", title: "Nivia Dominator 2.0", price: 650.00 },
    { id: 4, imgSrc: "https://5.imimg.com/data5/SELLER/Default/2023/6/313508139/WE/IS/CO/33053446/nivia-simbolo-football-500x500.jpg", title: "Nivia Simbolo", price: 250.00 },
    { id: 5, imgSrc: "https://rukminim1.flixcart.com/image/832/832/ball/a/j/y/229-1-nivia-football-football-pro-street-original-imaehufwyy2pfcfy.jpeg?q=70", title: "Shining Star", price: 250.00 },
    { id: 6, imgSrc: "https://www.sportswing.in/wp-content/uploads/2019/03/Nivia-Equator-Football-Size-5-1.jpg", title: "Nivia Equator", price: 650.00 },
    { id: 7, imgSrc: "https://5.imimg.com/data5/CU/VB/MY-65431535/nivia-street-football-500x500.jpg", title: "Street Nighter", price: 850.00 },
    { id: 8, imgSrc: "https://5.imimg.com/data5/SELLER/Default/2021/6/IV/OG/WM/131503146/nivia-football-1000x1000.png", title: "Nivia Trainer", price: 950.00 },
    { id: 9, imgSrc: "https://images.prodirectsport.com/ProductImages/Creative_1/1011608_Main_1806902.jpg?im=RegionOfInterestCrop=(800,800),regionOfInterest=(anchor=(x=800,y=150),width=50,height=50)", title: "Puma Future 7 Boot", price: 750.00 },
    { id: 10, imgSrc: "https://thumblr.uniid.it/product/291980/f3fcbd616846.jpg", title: "Nike Mercurial", price: 4550.00 },
    { id: 11, imgSrc: "https://images.prodirectsport.com/ProductImages/Main/1011607_Main_1761658.jpg", title: "Puma Oberoi SGB", price: 950.00 },
    { id: 12, imgSrc: "https://images.prodirectsport.com/ProductImages/Main/1001684_Main_1663153.jpg", title: "Puma Neymar FG", price: 850.00 },
    { id: 13, imgSrc: "https://images.prodirectsport.com/ProductImages/Main/281261_Main_1663231.jpg", title: "Puma Ultra Flex X Neymar", price: 850.00 },
    { id: 14, imgSrc: "https://images.prodirectsport.com/ProductImages/Main/281261_Main_1663231.jpg", title: "Puma Ultra Flex X Neymar", price: 850.00 },

    // Add more products as needed
  ]);

  return (
    <div className="product-list">
      {products.slice(0, numOfCards).map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;

