import React from 'react'
import Fruits from './components/fruits/Fruits'
import './App.css'
import Vegetables from './components/vegetables/Vegetables'
import Dryfruits from './components/dryfruits/Dryfruits'
import ColdDrinks from './components/coldDrinks/ColdDrinks'
import Nav from './components/Nav/Nav'
import Cart from './components/Cart/Cart'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/fruits' element={<Fruits/>}/>
        <Route path='/vegetables' element={<Vegetables/>}/>
        <Route path='dryfruits' element={<Dryfruits/>}/>
        <Route path='/colddrinks' element={<ColdDrinks/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </>
  )
}

export default App
