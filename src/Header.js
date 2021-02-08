import React from 'react';
import "./Header.css";
import Logo from "./resources/servisslogo.png";

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt=""/>
            <ul className="navLinks">
                <li><a href="#">Ziedu Grozi</a></li>
                <li><a href="#">Grozs</a></li>
            </ul>
        </div>
    );
}

export default Header;
