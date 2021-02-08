import React from 'react';
import "./Product.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Popup from './Popup';

const Product = ({title, price, description, image}) => {

    return (
        <div className="product">
            <div className="productImageContainer">
                <img src={image} alt="product image"/>
            </div>
            <div className="productDescription">
                <h3>{title}</h3>
                <h4>{price}€</h4>
            </div>
            <div className="productButtonsContainer">
                <button><ShoppingCartIcon />Ielikt Grozā</button>
            </div>
            <Popup description={description} image={image} price={price} title={title} />
        </div>
    );
}

export default Product;
