import React, { useState } from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import TotalCost from './TotalCost';
import DoneIcon from '@material-ui/icons/Done';
import CheckoutInfo from './CheckoutInfo';
import { getBasketTotal } from './reducer';

const Checkout = () => {

    const [{basket}, dispatch] = useStateValue();
    const [checkoutState, setCheckoutState] = useState("hiddenCheckoutInfo");

    const checkIfBasketEmpty = () => {
        if(getBasketTotal(basket) === 0){
            alert("Jūsu grozs ir tukšs");
            return;            
        }
        setCheckoutState("checkoutInfo");
    }

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
                <button onClick={checkIfBasketEmpty}><DoneIcon />Pasūtīt</button>
            </div>
            <CheckoutInfo checkoutState={checkoutState} setCheckoutState={setCheckoutState} />
        </div>
    )
}

export default Checkout
