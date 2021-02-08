import React from 'react';
import "./Popup.css";

const Popup = ({title, price, description, image}) => {
    return (
        <div className="popup">
            <div className="popupContainer">
                <h2>{title}</h2>
                <img src={image} alt=""/>
            </div>
        </div>
    )
}

export default Popup
