import React, { useEffect, useState } from 'react';
import "./Header.css";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';


const Header = () => {

    const [{basket, user}, dispatch] = useStateValue();
    const [show, handleShow] = useState(false);
    const history = useHistory();

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
            <Link className="headerLinkTag" to="/">
                <h1 className="logo">Bēru vainagi</h1>
            </Link>
            <ul className="navLinks">
                <li><a onClick={() => history.push("/")}>Vainagi</a></li>
                <li><a>Kontakti</a></li>
                <li><a>Privātuma Politika</a></li>
                <li><a><PersonOutlineIcon /> Ienākt</a></li>                
                <li><a onClick={() => history.push("/checkout")}><ShoppingBasketOutlinedIcon/> Grozs |<span className="header-basket-count">{basket?.length}</span></a></li>                
            </ul>
        </div>
    );
}

export default Header;
