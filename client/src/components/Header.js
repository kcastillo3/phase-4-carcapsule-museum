// Header.js

import React from 'react'
import NavBar from './Navbar'
import '../index.css'
import logo from '../../src/logo192.png'

const Header = () => {
  return (
    <header>
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          boxShadow: '1px 1px 3px #333',
          fontSize: '20px',
        }}
      >
        <img
          style={{ height: '60px', width: '60px' }}
          src={logo}
          alt="Car Capsule Museum Logo"
          className="logo"
        />
        <NavBar />
      </div>
    </header>
  )
}

export default Header
