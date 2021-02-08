import React, { useState } from 'react';
import "./Product.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AboutProductPage from './AboutProductPage';
import SearchIcon from '@material-ui/icons/Search';

const Product = ({title, price, description, image}) => {

    const [popupPageState, setPopupPageState] = useState("");

    const togglePopupPageVisibility = () => {

    }

    return (
        <div className="product">
            <div className="productImageContainer">
                <img src={image} alt="product image"/>
                <button><SearchIcon />Lasīt Vairāk</button>
            </div>
            <div className="productDescription">
                <h3>{title}</h3>
                <h4>{price}€</h4>
            </div>
            <div className="productButtonsContainer">
                <button onClick={togglePopupPageVisibility}><ShoppingCartIcon />Ielikt Grozā</button>
            </div>
            <AboutProductPage
                popupPageState={popupPageState} 
                setPopupPageState={setPopupPageState} 
                title={title} 
                price={price} 
                description={description} 
                image={image} 
            />
        </div>
    );
}

export default Product;
