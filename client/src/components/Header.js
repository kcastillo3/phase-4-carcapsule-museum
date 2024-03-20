// Header.js

import React from 'react';
import NavBar from './Navbar';

const Header = () => {
return (
<header>
    <div className="container">
    <img src="/path/to/logo.png" alt="Car Capsule Museum Logo" className="logo" />
    <NavBar />
    </div>
</header>
);
};

export default Header;
