import React, { useState } from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import TotalCost from './TotalCost';
import DoneIcon from '@material-ui/icons/Done';
import CheckoutInfo from './CheckoutInfo';

const Checkout = () => {

    const [{basket}, dispatch] = useStateValue();
    const [checkoutState, setCheckoutState] = useState("hiddenCheckoutInfo")

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
            <div className="checkoutButtonClontainer">
                <button onClick={() => setCheckoutState("checkoutInfo")}><DoneIcon />Pasūtīt</button>
            </div>
            <CheckoutInfo checkoutState={checkoutState} setCheckoutState={setCheckoutState} />
        </div>
    )
}

export default Checkout
