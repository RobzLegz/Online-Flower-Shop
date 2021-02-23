import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com';
import {SERVICE_ID, TEMPLATE_ID, USER_ID} from "./privateData";

const ContactPage = () => {

    const [senderName, setSenderName] = useState("");
    const [sendingReason, setSendingReason] = useState("");
    const [sendedrEmail, setSenderEmail] = useState("");
    const [messageStete, setMessageState] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        setSenderName("");
        setSendingReason("");
        setSenderEmail("");
        setMessageState("");
    }

    function sendEmail(e) {
        e.preventDefault();    
        emailjs.sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, e.target, `${USER_ID}`).then((result) => {
            alert(result.text);
        }, (error) => {
            alert(error.text);
        });
      }

    return (
        <ContactForm onSubmit={sendEmail}>
            <ContactContainer>
                <ContactInput name="name" value={senderName} onChange={(e) => setSenderName(e.target.value)} type="text" required placeholder="Vārds" />
                <ContactInput name="context" value={sendingReason} onChange={(e) => setSendingReason(e.target.value)} type="text" required placeholder="Temats" />
                <ContactInput name="mail" value={sendedrEmail} onChange={(e) => setSenderEmail(e.target.value)} type="email" required placeholder="e-pasts" />
                <ContactMessageBox required name="message" value={messageStete} onChange={(e) => setMessageState(e.target.value)} required placeholder="Jautājums" />
                <ContactButton onClick={sendMessage} type="submit">Nosūtīt</ContactButton>
            </ContactContainer>
        </ContactForm>
    )
}
const ContactForm = styled.div`
    width: 100%;
    height:100vh;
    display: grid;
    place-items: center;
    background: #f7f7f7;
`;
const ContactContainer = styled.form`
    height: 500px;
    width:400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(90deg, #2b5735, #638455);
    border-radius: 20px;
`;
const ContactInput = styled.input`
    margin:0 0 10px 0;
    height: 40px;
    padding: 0 10px;
    font-size:1rem;
    outline: none;
    border: 1px solid #000;
`;
const ContactMessageBox = styled.textarea`
    flex:1;
    margin-bottom: 20px;
    padding: 5px 10px;
    max-width: 360px;
    min-width: 360px;
    font-size: 15px;
    outline: none;
    border: none;
`;
const ContactButton = styled(Button)`
    background: #2b5735;
    border: 1px solid #f6f6f6;
    color:#f6f6f6;
    margin: 30px auto ;
    width:300px;
`;

export default ContactPage
