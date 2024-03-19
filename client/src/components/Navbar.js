// NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/cars">Cars</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
        </li>
        </ul>
    </div>
    </div>
</nav>
);
};

export default NavBar;
