import React, { useEffect, useState } from 'react';
import "./Header.css";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';


const Header = () => {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []) 

    return (
        <div className={`header ${ show && "scrolledHeader"}`}>
            <h1 className="logo">Bēru vainagi</h1>
            <ul className="navLinks">
                <li><a href="#">Vainagi</a></li>
                <li><a href="#">Kontakti</a></li>
                <li><a href="#">Privātuma Politika</a></li>
                <li><a href="#"><PersonOutlineIcon /> Ienākt</a></li>
                <li><a href="#"><ShoppingBasketOutlinedIcon/> Grozs</a></li>
            </ul>
        </div>
    );
}

export default Header;
