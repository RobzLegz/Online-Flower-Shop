import React, { useState } from 'react';
import "./CheckoutInfo.css";
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import TotalCost from './TotalCost';
import db from './firebase';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

const CheckoutInfo = ({checkoutState, setCheckoutState}) => {

    const history = useHistory();
    const [orderName, setOrderName] = useState("");
    const [orderEmail, setOrderEmail] = useState("");
    const [orderPhoneNumber, setOrderPhoneNumber] = useState("");
    const [orderAddress, setOrderAddress] = useState("");
    const [orderButtonState, setOrderButtonState] = useState(false)
    const [{basket}, dispatch] = useStateValue();

    const registerOrder = (e) => {
        e.preventDefault()
        if(getBasketTotal(basket) === 0){
            alert("Jūsu grozs ir tukšs");
            return;            
        }
        console.log(orderName)
        console.log(orderEmail)
        console.log(orderPhoneNumber)
        console.log(orderAddress)
        console.log(basket)
        console.log(getBasketTotal(basket))
        db.collection("orders").add({
            name: orderName,
            email: orderEmail,
            number: orderPhoneNumber,
            address: orderAddress,
            order: basket,
            orderValue: getBasketTotal(basket) + "€",
        }).catch((error) => {
            alert(error);
            return;
        })
    }

    return (
        <div className={checkoutState}>
            <div className="checkoutForm">
                <button onClick={() => setCheckoutState("hiddenCheckoutInfo")}><KeyboardReturnIcon />Atpakaļ</button>
                <h2>Apmaksāt</h2>
                <div className="checkoutInputs">
                    <form className="checkoutInputs">
                        <input type="text" value={orderName} onChange={(e) => setOrderName(e.target.value)} placeholder="Vārds" autoComplete="off" required name="name" />
                        <input type="email" value={orderEmail} onChange={(e) => setOrderEmail(e.target.value)} placeholder="E-pasts" required name="email" />
                        <input type="number" value={orderPhoneNumber} onChange={(e) => setOrderPhoneNumber(e.target.value)} placeholder="Telefona nr." required name="phone" />
                        <input type="text" value={orderAddress} onChange={(e) => setOrderAddress(e.target.value)} placeholder="Adrese" required autoComplete="off" />
                        <div className="checkbox-container">
                            <p>Es piekrītu noteikumiem un <strong onClick={() => history.push("/privacy")}>privātuma politikai</strong></p>
                            <input type="checkbox" required onChange={() => setOrderButtonState(!orderButtonState)} />
                        </div>
                        <button className={orderButtonState === false ? "noOrdersAllowedButton" : "ordersAllowedButton"} type="submit" onClick={registerOrder}>Turpināt</button>
                    </form>
                </div>
            </div>
            <div className="totalCostComponent">
                <TotalCost />
            </div>
        </div>
    )
}

export default CheckoutInfo
