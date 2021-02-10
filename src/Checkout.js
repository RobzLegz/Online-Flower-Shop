import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import TotalCost from './TotalCost';

const Checkout = () => {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="totalContainer">
                <TotalCost />       
            </div>         
            <div className="checkoutItems">
                {basket.map(item => (
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>
    )
}

export default Checkout
