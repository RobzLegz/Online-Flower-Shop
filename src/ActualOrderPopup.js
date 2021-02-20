import React from 'react';
import styled from 'styled-components';

const ActualOrderPopup = ({address,email,name,phone,actualOrder,orderDate,orderValue,recieverPhone,recieverEmail,recieverName,setOrderPopupState}) => {
    return (
        <StyledPopup>
            <StyledPopupInsideDiv>
                <StyledPriceContainer>
                    <h2>Cena: {orderValue}</h2>
                </StyledPriceContainer>
                <StyledPopupRecieverInfo>
                    <h2>Saņēmējs: {recieverName}</h2>
                </StyledPopupRecieverInfo>     
                <StyledPopupRecieverInfo>
                    <h3>Saņēmēja numurs: {recieverPhone}</h3>
                </StyledPopupRecieverInfo>                              
                <StyledPopupRecieverInfo>
                    <h4>Saņēmēja e-pasts: {recieverEmail}</h4>
                </StyledPopupRecieverInfo>    
                <h2>Datums: {new Date(orderDate?.toDate()).toLocaleString().slice(0, -13)}</h2>
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
const StyledPopupRecieverInfo = styled.div`
    display:flex;
`;
const StyledPriceContainer = styled.div`

`;

export default ActualOrderPopup;
