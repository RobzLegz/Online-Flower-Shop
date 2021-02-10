import React, { useState } from 'react';
import "./Product.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AboutProductPage from './AboutProductPage';
import SearchIcon from '@material-ui/icons/Search';
import {useStateValue} from "./StateProvider";

const Product = ({title, price, description, image, id}) => {

    const [popupPageState, setPopupPageState] = useState("invisiblePopup");
    const [{basket}, dispatch] = useStateValue();

    const togglePopupPageVisibility = () => {
        setPopupPageState("visiblePopup");
    }

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            },
        });
    }

    return (
        <div className="product">
            <div className="productImageContainer">
                <img src={image} alt="product image"/>
                <button onClick={togglePopupPageVisibility}><SearchIcon />Lasīt Vairāk</button>
            </div>
            <div className="productDescription">
                <h3>{title}</h3>
                <h4>{price}€</h4>
            </div>
            <div className="productButtonsContainer">
                <button ><ShoppingCartIcon />Ielikt Grozā</button>
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
