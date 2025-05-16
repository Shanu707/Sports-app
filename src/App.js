import logo from './logo.svg';
import './App.css';
import'./Home.css';
import Home from './Components/Home';
//import About from './Components/About';
import ProductView from './Components/ProductView';
import BuyNow from './Components/Buynow';
// import ProductDetails from './Components/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ProductList from './Components/ProductList';
import OrderConfirmation from './Components/OrderConfirmation';
// import OrderProgressBar from './Components/OrderProgressBar';





// import ProductView from './Components/ProductView';
// const handleBuyNow = (id, quantity) => {
//   // Your logic to handle the buy now action
//   console.log(`Buying product with ID: ${id} and quantity: ${quantity}`);
// };

function App() {

  // const handleBuyNow = (id) => {
  //   console.log(`Buying product with ID: ${id}`);
  // };

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/product' element={<ProductList/>}/>
        {/* <Route path='/buynow' element={<Buynow/>}/> */}
        <Route path='/mycomp' element={<ProductView/>}/>

        {/* <Route
          path="/buynow/:id"
          render={(props) => (
            <BuyNow {...props} handleBuyNow={handleBuyNow} />
          )}
        /> */}
        
        <Route path="/buynow/:id" element={<BuyNow />} /> 
        <Route path='/order-confirmation' element={<OrderConfirmation/>}  />

        
        

      </Routes>
      
      </Router>
  );
}

export default App;
