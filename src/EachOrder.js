import React, { useState } from 'react';
import ActualOrderPopup from './ActualOrderPopup';
import "./EachOrder.css";

const EachOrder = ({address,email,name,phone,actualOrder,orderDate,orderValue}) => {

    const [orderPopupState, setOrderPopupState] = useState(false);

    return (
        <div className="eachOrderContainer">
            <div className="aboutOrder">
                <p>{address}</p>
            </div>
            <div className="userInfo">
                <h5>{name}</h5>
                <small>{email}</small>                
                <p>{phone}</p>
            </div>
            <div className="orderDetails">
                <h4>{orderValue}</h4>
                <button onClick={() => setOrderPopupState(true)}>Apskatīt</button>
            </div>
            {orderPopupState && <ActualOrderPopup setOrderPopupState={setOrderPopupState} />}
        </div>
    )
}

export default EachOrder
