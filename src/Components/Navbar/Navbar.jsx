import React, { useState } from 'react'
import './navbar.scss'
const Navbar = () => {
  const[open,setOpen]=useState(false);
  return (
    <div>
        <nav>
            <div className="left">
              <a href='/'  className='logo'>
                <img src="/logo.png" alt=""/>
                <span>Zameen.pk</span>
              </a>
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
              <a href="/">Cities</a>
            </div>
            <div className="right">
            <a href="/">Sign in</a>
            <a href="/" className='register'>Sign up</a>
            <div className="menuIcon">
              <img src="/menu.png" alt="" 
              onClick={()=>setOpen(prev=>!prev)}
              />
            </div>
            <div className={open ? "menu active" : "menu"}>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Agents</a>
              <a href="">Sign in</a>
              <a href="">Sign up</a>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar;