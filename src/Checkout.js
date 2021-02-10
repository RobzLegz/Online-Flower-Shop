import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

const Checkout = () => {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">            
            <div className="checkout-left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad" className="checkout-ad"/>
                <div>
                    <h3>{user?.email}</h3>
                    <h2 className="checkout-title">Your Shopping Basket</h2>
                </div>
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
