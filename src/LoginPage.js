import React from 'react';
import "./LoginPage.css";

const LoginPage = () => {
    return (
        <div className="loginPage">
            <form>
                <input type="text" placeholder="Lietotājvārds" />
                <input type="password" placeholder="Parole" />
                <button type="submit">Ieiet</button>
            </form>
        </div>
    )
}

export default LoginPage;
