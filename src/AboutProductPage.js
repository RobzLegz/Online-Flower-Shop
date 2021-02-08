import React from 'react';
import "./AboutProductPage.css";

const AboutProductPage = ({title, price, description, image}) => {
    return (
        <div className="aboutProductPage">
            <div className="aboutProductPopup">
                <h2>{title}</h2>
                <h3>{price}</h3>
                <img src={image} alt=""/>
                <p>{description}</p>

            </div>
        </div>
    );
}

export default AboutProductPage;