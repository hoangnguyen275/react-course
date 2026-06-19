import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrderPage } from './pages/OrderPage';
import { TrackingPage } from './pages/TrackingPage';
import { Error404Page } from './pages/Error404Page';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path="checkout" element={<CheckoutPage/>} />
      <Route path="orders" element={<OrderPage/>} />
      <Route path="tracking" element={<TrackingPage/>}/>
      <Route path="*" element={<Error404Page/>} />
    </Routes>    
  )
}

export default App
