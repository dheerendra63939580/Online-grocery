import React from 'react'
import './Nav.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const storeData = useSelector(state=>state.product)
  return (
      <nav className="navbar">
        <NavLink className="common" to="/"><sapn className="logo">Home Logo</sapn></NavLink>
        <div className='navbar-r'>
            <NavLink className="common" to="/fruits"><span>Fruits</span></NavLink>
            <NavLink className="common" to="/vegetables"><span>Vegetables</span></NavLink>
            <NavLink className="common" to='/dryfruits'><span>Dry Fruits</span></NavLink>
            <NavLink className="common" to='/colddrinks'><span>Cold Drinks</span></NavLink>
            <NavLink className="common" to='/cart'>
                <span>Cart</span>
                <span> ({storeData.length})</span>
            </NavLink>
        </div>
    </nav>
    
  )
}

export default Nav
