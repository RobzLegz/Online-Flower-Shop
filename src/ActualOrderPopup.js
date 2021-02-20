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
                    <h2>Saņēmēja adrese: {address}</h2>
                </StyledPopupRecieverInfo>   
                <StyledPopupRecieverInfo>
                    <h3>Saņēmēja telefons: {recieverPhone}</h3>
                </StyledPopupRecieverInfo>                              
                <StyledPopupRecieverInfo>
                    <h4>Saņēmēja e-pasts: {recieverEmail}</h4>
                </StyledPopupRecieverInfo>    
                <StyledPopupRecieverInfo>
                    <h2>Piegādes datums: {new Date(orderDate?.toDate()).toLocaleString().slice(0, -13)}</h2>                    
                </StyledPopupRecieverInfo>
                <StyledButtonClose onClick={() => setOrderPopupState(false)}>Aizvērt</StyledButtonClose>
                <StyledPopupRecieverInfo>
                    <h3>Pasūtītājs: {name}</h3>
                </StyledPopupRecieverInfo> 
                <StyledPopupRecieverInfo>
                    <h3>Pasūtītāja telefons: {phone}</h3>
                </StyledPopupRecieverInfo> 
                <StyledPopupRecieverInfo>
                    <h3>Pasūtītāja e-pasts: {email}</h3>
                </StyledPopupRecieverInfo> 
                <h2 style={{textAlign: "center", fontSize: "2rem",margin:"10px 0"}}>Pasūtījums:</h2>
                {actualOrder.map((order) => (
                    <AboutOrderContainer>
                        <img src={order.image} alt={order.title}/>
                        <h2 style={{margin: "0 20px"}}>{order.title}</h2>
                        <h3>{order.price}‎€</h3>
                    </AboutOrderContainer> 
                ))}                                
            </StyledPopupInsideDiv>
        </StyledPopup>
    )
}
const StyledPopup = styled.div`
    position:absolute;
    background: rgba(0,0,0,0.2);
    width:100%;
    min-height:100vh;
    padding:5% 0;
    left:0;
    top:0;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const StyledPopupInsideDiv = styled.div`
    width: 60%;
    min-height:80%;
    max-height:fit-content;
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
const AboutOrderContainer = styled.div`
    height:fit-content;
    background-color:#f9f9f9;
    border-bottom:1px solid lightgrey;
    align-items:center;
    justify-content:center;
    display:flex;
    padding:20px 0;
    >img{
        width:100px;
        object-fit:cover;
        height:100px;
    }
`;

export default ActualOrderPopup;
