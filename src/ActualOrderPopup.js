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
                    <h3>Saņēmēja telefons: {recieverPhone}</h3>
                </StyledPopupRecieverInfo>                              
                <StyledPopupRecieverInfo>
                    <h4>Saņēmēja e-pasts: {recieverEmail}</h4>
                </StyledPopupRecieverInfo>    
                <StyledPopupRecieverInfo>
                    <h2>Pasūtījuma datums: {new Date(orderDate?.toDate()).toLocaleString().slice(0, -13)}</h2>                    
                </StyledPopupRecieverInfo>
                <StyledButtonClose onClick={() => setOrderPopupState(false)}>
                    Aizvērt
                </StyledButtonClose>
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
    position: relative;
`;
const StyledPopupRecieverInfo = styled.div`
    display:flex;
    height: 40px;
    background-color:#f9f9f9;
    border-bottom:1px solid lightgrey;
    align-items:center;
    justify-content:center;
`;
const StyledPriceContainer = styled.div`
    height: 60px;
    background-color:#f9f9f9;
    border-bottom:1px solid lightgrey;
    align-items:center;
    justify-content:center;
    display:flex;
`;
const StyledButtonClose = styled.button`
    position:absolute;
    right:0;
    bottom:0;
    width:100px;
    height:40px;
    background-color:#be4d4d;
    border:none;
    outline:none;
    color:#fff;
    font-size:1rem;
    cursor: pointer;;
`;

export default ActualOrderPopup;
