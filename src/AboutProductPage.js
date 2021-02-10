import React from 'react';
import "./AboutProductPage.css";

const AboutProductPage = ({title, price, description, image, popupPageState, setPopupPageState}) => {

    const togglePopupState = () => {
        setPopupPageState("invisiblePopup")
    }

    return (
        <div className={popupPageState}>
            <div className="aboutProductPopup">
                <button onClick={togglePopupState}>Close</button>
                <h2>{title}</h2>
                <h3>{price}</h3>
                <img src={image} alt={title}/>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default AboutProductPage;