import React from 'react';
import styled from 'styled-components';

const ActualOrderPopup = ({address,email,name,phone,actualOrder,orderDate,orderValue,recieverPhone,recieverEmail,recieverName,setOrderPopupState}) => {
    return (
        <StyledPopup>
            <StyledPopupInsideDiv>
                <h1>{address}</h1>
            </StyledPopupInsideDiv>
        </StyledPopup>
    )
}
const StyledPopup = styled.div`
    position:absolute;
    background: rgba(0,0,0,0.2);
    width:80%;
    height:100vh;
    margin:0 10%;
    left:0;
    top:0;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const StyledPopupInsideDiv = styled.div`
    width: 80%;
    height:80%;
    background:#fff;
`;

export default ActualOrderPopup;
