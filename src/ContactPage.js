import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'

const ContactPage = () => {

    const sendMessage = (e) => {
        e.preventDefault();
    }

    return (
        <ContactForm>
            <ContactContainer>
                <ContactInput type="text" required placeholder="Vārds" />
                <ContactInput type="text" required placeholder="Temats" />
                <ContactInput type="email" required placeholder="e-pasts" />
                <ContactMessageBox required placeholder="Jautājums" />
                <ContactButton onClick={sendMessage} type="submit">
                    Nosūtīt
                </ContactButton>
            </ContactContainer>
        </ContactForm>
    )
}
const ContactForm = styled.div`
    width: 100%;
    height:100vh;
    display: grid;
    place-items: center;
`;
const ContactContainer = styled.form`
    height: 400px;
    width:300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(90deg, #2b5735, #638455);
`;
const ContactInput = styled.input`
    
`;
const ContactMessageBox = styled.textarea`
    
`;
const ContactButton = styled(Button)`
    
`;

export default ContactPage
