import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id="Navbar">
            <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "notactive")} style={{textDecoration:'none'}}>Home</NavLink>
            <NavLink to='/Students' className={({ isActive }) => (isActive ? "active" : "notactive")} style={{textDecoration:'none'}}>Students</NavLink>
            <NavLink to='/Contact' className={({ isActive }) => (isActive ? "active" : "notactive")} style={{textDecoration:'none'}}>Contact</NavLink>
        </div>
    )
}

export default Navbar
