import { Routes, Route } from 'react-router';
import { HomeApp } from './apps/portfolio/HomeApp';
import { EcommerceApp } from './apps/EcommerceApp';
import './App.css'

function App(){
  return (
    <Routes>
      <Route index element={<HomeApp />} />
      <Route path="EcommerceApp/*" element={<EcommerceApp />} />
    </Routes>    
  )
}

export default App;