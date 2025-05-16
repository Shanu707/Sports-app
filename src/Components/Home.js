import React from 'react'
import { Navbar, Nav ,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'






function Home() {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#home">Shop</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            <Nav.Link href="#home">Search</Nav.Link>
           <Nav.Link as={Link} to="/about">About</Nav.Link> 
        </Nav>

       <NavDropdown className='text-white' title="More" id="basic-nav-dropdown"> 
          <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Cart</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Wishlist</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Login</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Register</NavDropdown.Item>

        </NavDropdown>

    </Navbar.Collapse>
</Navbar>



<div style={{ textAlign: 'center', marginTop: '0px', backgroundImage: 'url("https://wallpapercave.com/wp/wp2603380.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: '265px' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '20px', borderRadius: '30px' }}>
        
      <h2 style={{ marginTop: '10' }}>Sporting Spurts</h2>
        
        <p>
          "Sporting Spurts" is an e-commerce application dedicated to providing a comprehensive platform for sports enthusiasts. With a wide range of sports-related products, from equipment to apparel and accessories, Sporting Spurts caters to athletes of all levels and disciplines. At Sporting Spurts, customers can explore an extensive catalog featuring top-quality products from leading brands in the sports industry. Whether you're a professional athlete, a weekend warrior, or someone simply passionate about sports, you'll find everything you need to pursue your favorite activities.
        </p>
        <Link to="/product">
          <button className="btn btn-primary">Shop Now</button>
        </Link>
      </div>
    
</div>



               
    </div>
  )
 
}

export default Home;