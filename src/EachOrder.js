import React, { useState } from 'react';
import ActualOrderPopup from './ActualOrderPopup';
import "./EachOrder.css";

const EachOrder = ({recieverPhone,recieverEmail,recieverName,address,email,name,phone,actualOrder,orderDate,orderValue}) => {

    const [orderPopupState, setOrderPopupState] = useState(false);

    return (
        <div className="eachOrderContainer">
            <div className="aboutOrder">
                <p>{address}</p>
            </div>
            <div className="userInfo">
                <h5>{recieverName}</h5>
                <small>{recieverEmail}</small>                
                <p>{recieverPhone}</p>
                <small>Datums: {new Date(orderDate?.toDate()).toLocaleString().slice(0, -13)}</small>
            </div>
            <div className="orderDetails">
                <h4>{orderValue}</h4>
                <button onClick={() => setOrderPopupState(true)}>Apskatīt</button>
            </div>
            {orderPopupState && 
                <ActualOrderPopup 
                    setOrderPopupState={setOrderPopupState} 
                    address={address}
                    email={email}
                    name={name}
                    phone={phone}
                    actualOrder={actualOrder}
                    orderDate={orderDate}
                    orderValue={orderValue}
                    recieverPhone={recieverPhone}
                    recieverEmail={recieverEmail}
                    recieverName={recieverName}
                />
            }
        </div>
    )
}

export default EachOrder
