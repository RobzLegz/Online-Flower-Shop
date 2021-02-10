import React from 'react';
import "./TotalCost.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

const TotalCost = () => {

    const [{basket}, dispatch] = useStateValue();

    return (
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Kopā ({basket?.length} vainagi): <strong>{value}</strong>
                    </p>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)} 
            displayType={"text"}
            thousandSeparator={true}
            prefix={"‎€"}
        />
    )
}

export default TotalCost
