import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';
import DeleteIcon from '@material-ui/icons/Delete';

const CheckoutProduct = ({id, image, title, price}) => {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkoutProduct">
            <img src={image} alt={title} className="checkout-image"/>
            <div className="checkout-product-info">
                <h4 className="checkout-product-title">{title}</h4>
                <p className="checkout-product-price"><strong>{price}€</strong></p>
                
            </div>
            <button><DeleteIcon /></button>
        </div>
    )
}

export default CheckoutProduct
