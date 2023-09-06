import React, { useEffect } from 'react'
import { Home } from "./components/JS/Home";
import { Navbar } from "./components/JS/Navbar";
import { Price } from "./components/JS/Price";
import { Login } from './components/JS/Login';
import { Footer } from './components/JS/Footer';
import { Register } from './components/JS/Register';
import Dashboard from './components/JS/Dashboard';
import "./components/CSS/Home.css";
import "./components/CSS/Navbar.css";
import "./components/CSS/Price.css";
import "./components/CSS/Login.css";
import "./components/CSS/Footer.css";
import "./components/CSS/Register.css";
import './App.css';
import { Route, Routes } from 'react-router-dom';


export const App = () => {
  useEffect(() => {
    document.title = 'AparClick';
    const favicon = document.querySelector("link[rel='icon']");
    favicon.href = '';
  }, []);

  return (
    <div className='background'>
      <Navbar />
      <Routes>
            <Route exact path='/home' element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/price" element={<Price />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/dashboard" element={<Dashboard />} />

      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App
