import React from 'react';
import "./AboutProductPage.css";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useStateValue } from './StateProvider';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const AboutProductPage = ({id, title, price, description, image, popupPageState, setPopupPageState}) => {

    const togglePopupState = () => {
        setPopupPageState("invisiblePopup")
    }

    return (
        <div className={popupPageState}>
            <div className="aboutProductPopup">
                <img src={image} alt={title}/>
                <button onClick={togglePopupState}><HighlightOffIcon />Aizvērt</button>
                <div className="popupInfo">
                    <div className="priceAboutContainer">
                        <h2>{title}</h2>
                        <h3>{price}€</h3>
                    </div>                
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutProductPage;