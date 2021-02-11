import React from 'react';
import "./CheckoutInfo.css";
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

const CheckoutInfo = ({checkoutState, setCheckoutState}) => {
    return (
        <div className={checkoutState}>
            <div className="checkoutForm">
                <button onClick={() => setCheckoutState("hiddenCheckoutInfo")}><KeyboardReturnIcon />Atpakaļ</button>
                <h2>Apmaksāt</h2>
                <div className="checkoutInputs">
                    <form className="checkoutInputs">
                        <input type="text" placeholder="Vārds" autoComplete="off" required name="name" />
                        <input type="email" placeholder="E-pasts" required name="email" />
                        <input type="number" placeholder="Telefona nr." required name="phone" />
                        <div className="checkbox-container">
                            <p>Es piekrītu noteikumiem un privātuma politikai</p>
                            <input type="checkbox" required/>
                        </div>
                        <button type="submit">Turpināt</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CheckoutInfo
