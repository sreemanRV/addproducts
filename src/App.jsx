import React from 'react'
import './App.css'
import AddProducts from './addProducts'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import DeleteComponent from './Deleteproduct'

function App() {
  return (
    <>
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<AddProducts />} />
        <Route path='/deleteproducts' element={<DeleteComponent />} />
      </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
