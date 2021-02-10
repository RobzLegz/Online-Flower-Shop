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
                <div className="productColumn">
                    <div className="productRow">
                        <Product 
                            id="123456789"
                            title="puķes bilde"
                            price={99.99}
                            image={ProductImageone}
                            description="puķes apraksts"
                        />
                        <Product 
                            id="3476745734675"
                            title="puķes bilde"
                            price={99.99}
                            image={ProductImagetwo}
                            description="puķes apraksts"
                        />
                        <Product
                            id="4567345732" 
                            title="puķes bilde"
                            price={99.99}
                            image={ProductImagethree}
                            description="puķes apraksts"
                        />
                    </div>
                    <div className="productRow">
                        <Product 
                            id="045692709"
                            title="puķes bilde"
                            price={99.99}
                            image={ProductImagefour}
                            description="puķes apraksts"
                        />
                        <Product 
                            id="45678949562789"
                            title="puķes bilde"
                            price={99.99}
                            image={ProductImagefive}
                            description="puķes apraksts"
                        />
                        <Product 
                            id="3456786534789"
                            title="puķes bilde"
                            price={99.99}
                            image={ProductImagesix}
                            description="puķes apraksts"
                        />
                    </div>              
                </div>      
                <div className="productColumn">
                    <div className="productRow">
                        <Product 
                            id="765435667"
                            title="puķes bilde"
                            price={99.99}
                            image={ProductImageten}
                            description="puķes apraksts"
                        />
                        <Product 
                            id="4556735434"
                            title="puķes bilde"
                            price={99.99}
                            image={ProductImageeleven}
                            description="puķes apraksts"
                        />
                        <Product 
                            id="537467846"
                            title="puķes bilde"
                            price={99.99}
                            image={ProductImagetvelve}
                            description="puķes apraksts"
                        />
                    </div>
                    <div className="productRow">
                        <Product 
                            id="0304204"
                            title="puķes bilde"
                            price={99.99}
                            image={ProductImagethirteen}
                            description="puķes apraksts"
                        />
                        <Product 
                            id="084238745320"
                            title="puķes bilde"
                            price={99.99}
                            image={ProductImagefourteen}
                            description="puķes apraksts"
                        />
                        <Product 
                            id="34563463254329"
                            title="puķes bilde"
                            price={99.99}
                            image={ProductImagesixteen}
                            description="puķes apraksts"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Home;