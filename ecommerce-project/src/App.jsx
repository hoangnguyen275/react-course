import axios from 'axios';
import { Routes, Route } from 'react-router';
import { useState, useEffect} from 'react';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrderPage } from './pages/OrderPage';
import { TrackingPage } from './pages/TrackingPage';
import { Error404Page } from './pages/Error404Page';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart}/>} />
      <Route path="orders" element={<OrderPage/>} />
      <Route path="tracking" element={<TrackingPage/>}/>
      <Route path="*" element={<Error404Page/>} />
    </Routes>    
  )
}

export default App
