import React from 'react';
import "./Product.css";

const Product = ({title, price, description, image}) => {
    return (
        <div className="product">
            <div className="productImageContainer">
                <img src={image} alt="product image"/>
            </div>
            <div className="productDescription">
                <h3>{title}</h3>
                <h4>{price}€</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Product;
