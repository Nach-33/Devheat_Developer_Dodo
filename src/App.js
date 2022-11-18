import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/homepage';
import Stock from './components/stock';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Homepage2 from './components/homepage2';
import Dashboard from './components/dashboard';
import Buy from './components/buy';
import Sell from './components/sell';
import './App.css'
import Login from './components/login';
import Register from './components/register';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './Css/header.css'
import './Css/navbar.css'



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route exact path="/stock" element={<Stock/>} />
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/in" element={<Homepage2 />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/buy" element={<Buy />} />
      <Route exact path="/sell" element={<Sell />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
