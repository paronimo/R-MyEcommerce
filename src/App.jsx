import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Sidebar from './components/barralateral.jsx';
import './App.css'

function App() {
function validatePassword(password, name, email) {
  const errors = [];
  const siteName = 'Mi Ecommerce';
  const prohibitedStrings = ['password', '1234', 'qwerty'];

  if (password.length < 8) {
    errors.push('Mínimo 8 caracteres');
  }
  if (!/[a-zA-Z]/.test(password)) {
    errors.push('Incluir al menos una letra');
  }
  if (!/\d/.test(password)) {
    errors.push('Incluir al menos un número');
  }
  if (!/[!@#$%^&*(),.?":{}<>|]/.test(password)) {
    errors.push('Incluir un carácter especial (! @ # $ % ^ & * ( ) , . ? " : { } | < >)');
  }
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
}
export default App
