import React from 'react'
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Service } from "./components/Service";
import { Price } from "./components/Price";
import { Card } from "./components/Card";
import './App.css'

export const App = () => {
  return (
    <div className='background'>
      <Navbar />
      <Header />
      <Service />

      <div className='row'>
        <div className='col-md-4'>
        <Card
      image='auto2.png'
      button='Auto'
        />
        </div>
        <div className='col-md-4'>
        <Card
      image='moto.png'
      button='Moto'
        />
        </div>
        <div className='col-md-4'>
        <Card
      image='camioneta2.png'
      button='Camioneta'
        />
        </div>
      </div>

      <Price />
    </div>
  )
}

export default App
