import React, { useState } from 'react';
import "./CheckoutInfo.css";
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import TotalCost from './TotalCost';
import db from './firebase';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CheckoutInfo = ({checkoutState, setCheckoutState}) => {

    const history = useHistory();
    const [orderName, setOrderName] = useState("");
    const [orderEmail, setOrderEmail] = useState("");
    const [orderPhoneNumber, setOrderPhoneNumber] = useState("");
    const [orderAddress, setOrderAddress] = useState("");
    const [orderButtonState, setOrderButtonState] = useState(false)
    const [{basket}, dispatch] = useStateValue();
    const [calendarValue, setCalendarValue] = useState(new Date());

    const registerOrder = (e) => {
        e.preventDefault();        
        if(orderName === ""){
            alert("Lūdzu norādiet savu vārdu!");
            return;
        }else if(orderEmail === ""){
            alert("Lūdzu norādiet savu e-pastu!");
            return;
        }else if(orderPhoneNumber === ""){
            alert("Lūdzu norādiet savu telefona numuru!");
            return;
        }else if(orderAddress === ""){
            alert("Lūdzu norādiet savu adresi!");
            return;
        }else if(calendarValue === new Date()) {
            alert("Uz šodienu pasūtījumu nevar veikt!");
            return;
        }
        setOrderEmail("");
        setOrderName("");
        setOrderPhoneNumber("");
        setOrderAddress("");
        db.collection("orders").add({
            name: orderName,
            email: orderEmail,
            number: orderPhoneNumber,
            address: orderAddress,
            orderDate: calendarValue,
            order: basket,
            orderValue: getBasketTotal(basket) + "€",            
        })
        alert("Pasūtījums noformēts")
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
                        <input type="text" value={orderAddress} onChange={(e) => setOrderAddress(e.target.value)} placeholder="Pilsēta... Adrese" required autoComplete="off" />
                        <div className="onSpotContainer">
                            <p>Saņemšu uz vietas</p>
                            <input type="checkbox" value={orderAddress} onChange={() => setOrderAddress("UZ VIETAS")}  required />
                        </div>
                        <Calendar
                            onChange={setCalendarValue}
                            value={calendarValue}
                            view="month"
                            selectRange={false}
                            showNavigation={false}
                            minDetail="month"
                            maxDetail="month"
                            defaultView="month"
                            tileDisabled={({ date }) => date.getDay() === 0}
                            minDate={new Date() }
                        />
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
