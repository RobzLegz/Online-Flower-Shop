import React from 'react';
import "./EachOrder.css";

const EachOrder = ({address,email,name,phone,actualOrder,orderDate,orderValue}) => {
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
                <button>Apskatīt</button>
            </div>
        </div>
    )
}

export default EachOrder
