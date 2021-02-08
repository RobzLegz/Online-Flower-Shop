import React from 'react';
import "./Home.css";
import Product from './Product';
import HomeHeaderImage from "./resources/homeHeaderImage.jpg";

const Home = () => {
    return (
        <div className="home">
            <div className="home-header">
                <img className="homeHeaderImage" src={HomeHeaderImage} alt=""/>
            </div>
            <Product />
        </div>
    );
}

export default Home;