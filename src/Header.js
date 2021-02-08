import React from 'react';
import "./Header.css";


const Header = () => {
    return (
        <div className="header">
            <h1 className="logo">Bēru vainagi</h1>
            <ul className="navLinks">
                <li><a href="#">Ziedu Grozi</a></li>
                <li><a href="#">Ienākt</a></li>
                <li><a href="#">Grozs</a></li>
            </ul>
        </div>
    );
}

export default Header;
