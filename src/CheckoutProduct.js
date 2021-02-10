import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, image, title, price}) => {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkoutProduct">
            <img src={image} alt={title} className="checkout-image"/>
            <div className="checkout-product-info">
                <p className="checkout-product-title">{title}</p>
                <p className="checkout-product-price"><strong>{price}€</strong></p>
                <button>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
