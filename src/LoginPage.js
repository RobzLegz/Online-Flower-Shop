import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { password, userName } from './constants';
import "./LoginPage.css";

const LoginPage = () => {

    const history = useHistory();

    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const checkLogin = (e) => {
        e.preventDefault();
        if(usernameInput === userName && passwordInput === password){
            alert("working");
            history.push("/");
        }else{
            alert("Nepaireizs lietotājvārds vai parole");
        }
    }

    return (
        <div className="loginPage">
            <form>
                <input type="text" value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)} placeholder="Lietotājvārds" />
                <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} placeholder="Parole" />
                <button type="submit" onClick={checkLogin}>Ieiet</button>
            </form>
        </div>
    )
}

export default LoginPage;
