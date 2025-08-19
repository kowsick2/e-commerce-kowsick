import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Filter from '../../layouts/filter';
import ProductDetails from '../ProductDetails.jsx';



function App() {
  return (
    <>
       <Routes>  
        <Route path="/edc" element={<Filter />} />
        <Route path='/' element={<ProductDetails />} />
        
       </Routes>
    </>
  )
}

export default App
