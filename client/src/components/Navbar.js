import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const NavBar = () => {
  return (
    <nav classNmae="navbar">
      <ul
        style={{
          display: 'flex',
          margin: '0.5rem',
          listStyle: 'none',
          justifyContent: 'space-between',
          padding: '5px',
          width: '200px',
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/car">Car Page</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
