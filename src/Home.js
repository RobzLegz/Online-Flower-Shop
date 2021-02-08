import React from 'react';
import "./Home.css";
import Product from './Product';
import HomeHeaderImage from "./resources/homeHeaderImage.jpg";

import ProductImageone from "./resources/WhatsApp Image 2021-02-08 at 11.09.07.jpeg";
import ProductImagetwo from "./resources/WhatsApp Image 2021-02-08 at 11.09.06 (4).jpeg";
import ProductImagethree from "./resources/WhatsApp Image 2021-02-08 at 11.09.05 (3).jpeg";

import ProductImagefour from "./resources/WhatsApp Image 2021-02-08 at 11.08.59.jpeg";
import ProductImagefive from "./resources/WhatsApp Image 2021-02-08 at 11.09.00 (1).jpeg";
import ProductImagesix from "./resources/WhatsApp Image 2021-02-08 at 11.09.00.jpeg";

import ProductImageseven from "./resources/WhatsApp Image 2021-02-08 at 11.09.01 (1).jpeg";
import ProductImageeight from "./resources/WhatsApp Image 2021-02-08 at 11.09.01.jpeg";
import ProductImagenine from "./resources/WhatsApp Image 2021-02-08 at 11.09.02.jpeg";

import ProductImageten from "./resources/WhatsApp Image 2021-02-08 at 11.09.03 (1).jpeg";
import ProductImageeleven from "./resources/WhatsApp Image 2021-02-08 at 11.09.04 (1).jpeg";
import ProductImagetvelve from "./resources/WhatsApp Image 2021-02-08 at 11.09.04 (2).jpeg";

import ProductImagethirteen from "./resources/WhatsApp Image 2021-02-08 at 11.09.05 (1).jpeg";
import ProductImagefourteen from "./resources/WhatsApp Image 2021-02-08 at 11.09.05 (2).jpeg";
import ProductImagesixteen from "./resources/WhatsApp Image 2021-02-08 at 11.09.06 (1).jpeg";

const Home = () => {
    return (
        <div className="home">
            <div className="home-header">
                <img className="homeHeaderImage" src={HomeHeaderImage} alt=""/>
            </div>
            <div className="productContainer">
                <div className="productRow">
                    <Product 
                        title="puķes bilde"
                        price={99.99}
                        image={ProductImageone}
                        description="puķes apraksts"
                    />
                </div>
                <div className="productRow">

                </div>
                <div className="productRow">

                </div>
                <div className="productRow">

                </div>
                <div className="productRow">

                </div>
            </div>
        </div>
    );
}

export default Home;