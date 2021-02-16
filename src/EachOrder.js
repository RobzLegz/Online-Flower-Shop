import React from 'react';
import "./EachOrder.css";

const EachOrder = ({address,email,name,phone,actualOrder,orderDate,orderValue}) => {
    return (
        <div className="eachOrderContainer">
            <div className="userInfo">
                <p>{address}</p>
                <small>{email}</small>
                <h5>{name}</h5>
                <p>{phone}</p>
            </div>
            <div className="orderDetails">
                <h4>{orderValue}</h4>
                
            </div>
        </div>
    )
}

export default EachOrder
