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
                            title="Sēru vainags ar sarkanām rozēm"
                            price={95}
                            image={ProductImageone}
                            description="Mēs izmantojam tikai oriģinālus mūsu floristu veidotus ziedu kompozīciju attēlus. Bildei ir ilustratīva nozīme, jo ziedi ir sezonāli. Ja konkrētie ziedi nebūs pieejami, mēs tos aizvietosim ar citiem, saglabājot konkrēto stilu un krāsu gammu. Mūsu profesionālie floristi vienmēr rūpējas par to, lai kompozīcijas būtu gaumīgas, skaistas un klienti - apmierināti. Ja vēlaties precizēt, vai bildē redzamie ziedi ir dotajā brīdī pieejami, lūdzu, sazinieties ar mums, zvanot - +371 26621676 vai rakstot uz - karkade@karkade.lv."
                        />
                        <Product 
                            id="3476745734675"
                            title="Sēru vainags"
                            price={99}
                            image={ProductImagetwo}
                            description="Mēs izmantojam tikai oriģinālus mūsu floristu veidotus ziedu kompozīciju attēlus. Bildei ir ilustratīva nozīme, jo ziedi ir sezonāli. Ja konkrētie ziedi nebūs pieejami, mēs tos aizvietosim ar citiem, saglabājot konkrēto stilu un krāsu gammu. Mūsu profesionālie floristi vienmēr rūpējas par to, lai kompozīcijas būtu gaumīgas, skaistas un klienti - apmierināti. Ja vēlaties precizēt, vai bildē redzamie ziedi ir dotajā brīdī pieejami, lūdzu, sazinieties ar mums, zvanot - +371 26621676 vai rakstot uz - karkade@karkade.lv."
                        />
                        <Product
                            id="4567345732" 
                            title="Sēru vainags"
                            price={99.99}
                            image={ProductImagethree}
                            description="Mēs izmantojam tikai oriģinālus mūsu floristu veidotus ziedu kompozīciju attēlus. Bildei ir ilustratīva nozīme, jo ziedi ir sezonāli. Ja konkrētie ziedi nebūs pieejami, mēs tos aizvietosim ar citiem, saglabājot konkrēto stilu un krāsu gammu. Mūsu profesionālie floristi vienmēr rūpējas par to, lai kompozīcijas būtu gaumīgas, skaistas un klienti - apmierināti. Ja vēlaties precizēt, vai bildē redzamie ziedi ir dotajā brīdī pieejami, lūdzu, sazinieties ar mums, zvanot - +371 26621676 vai rakstot uz - karkade@karkade.lv."
                        />
                    </div>
                    <div className="productRow">
                        <Product 
                            id="045692709"
                            title="Sēru vainags"
                            price={99.99}
                            image={ProductImagefour}
                            description="Mēs izmantojam tikai oriģinālus mūsu floristu veidotus ziedu kompozīciju attēlus. Bildei ir ilustratīva nozīme, jo ziedi ir sezonāli. Ja konkrētie ziedi nebūs pieejami, mēs tos aizvietosim ar citiem, saglabājot konkrēto stilu un krāsu gammu. Mūsu profesionālie floristi vienmēr rūpējas par to, lai kompozīcijas būtu gaumīgas, skaistas un klienti - apmierināti. Ja vēlaties precizēt, vai bildē redzamie ziedi ir dotajā brīdī pieejami, lūdzu, sazinieties ar mums, zvanot - +371 26621676 vai rakstot uz - karkade@karkade.lv."
                        />
                        <Product 
                            id="45678949562789"
                            title="Sēru štrauss"
                            price={48}
                            image={ProductImagefive}
                            description="Mēs izmantojam tikai oriģinālus mūsu floristu veidotus ziedu kompozīciju attēlus. Bildei ir ilustratīva nozīme, jo ziedi ir sezonāli. Ja konkrētie ziedi nebūs pieejami, mēs tos aizvietosim ar citiem, saglabājot konkrēto stilu un krāsu gammu. Mūsu profesionālie floristi vienmēr rūpējas par to, lai kompozīcijas būtu gaumīgas, skaistas un klienti - apmierināti. Ja vēlaties precizēt, vai bildē redzamie ziedi ir dotajā brīdī pieejami, lūdzu, sazinieties ar mums, zvanot - +371 26621676 vai rakstot uz - karkade@karkade.lv."
                        />
                        <Product 
                            id="3456786534789"
                            title="Sēru vainags"
                            price={99.99}
                            image={ProductImagesix}
                            description="Mēs izmantojam tikai oriģinālus mūsu floristu veidotus ziedu kompozīciju attēlus. Bildei ir ilustratīva nozīme, jo ziedi ir sezonāli. Ja konkrētie ziedi nebūs pieejami, mēs tos aizvietosim ar citiem, saglabājot konkrēto stilu un krāsu gammu. Mūsu profesionālie floristi vienmēr rūpējas par to, lai kompozīcijas būtu gaumīgas, skaistas un klienti - apmierināti. Ja vēlaties precizēt, vai bildē redzamie ziedi ir dotajā brīdī pieejami, lūdzu, sazinieties ar mums, zvanot - +371 26621676 vai rakstot uz - karkade@karkade.lv."
                        />
                    </div>              
                </div>      
                <div className="productColumn">
                    <div className="productRow">
                        <Product 
                            id="765435667"
                            title="Sēru vainags"
                            price={99.99}
                            image={ProductImageten}
                            description="Mēs izmantojam tikai oriģinālus mūsu floristu veidotus ziedu kompozīciju attēlus. Bildei ir ilustratīva nozīme, jo ziedi ir sezonāli. Ja konkrētie ziedi nebūs pieejami, mēs tos aizvietosim ar citiem, saglabājot konkrēto stilu un krāsu gammu. Mūsu profesionālie floristi vienmēr rūpējas par to, lai kompozīcijas būtu gaumīgas, skaistas un klienti - apmierināti. Ja vēlaties precizēt, vai bildē redzamie ziedi ir dotajā brīdī pieejami, lūdzu, sazinieties ar mums, zvanot - +371 26621676 vai rakstot uz - karkade@karkade.lv."
                        />
                        <Product 
                            id="4556735434"
                            title="Sēru vainags"
                            price={99.99}
                            image={ProductImageeleven}
                            description="Mēs izmantojam tikai oriģinālus mūsu floristu veidotus ziedu kompozīciju attēlus. Bildei ir ilustratīva nozīme, jo ziedi ir sezonāli. Ja konkrētie ziedi nebūs pieejami, mēs tos aizvietosim ar citiem, saglabājot konkrēto stilu un krāsu gammu. Mūsu profesionālie floristi vienmēr rūpējas par to, lai kompozīcijas būtu gaumīgas, skaistas un klienti - apmierināti. Ja vēlaties precizēt, vai bildē redzamie ziedi ir dotajā brīdī pieejami, lūdzu, sazinieties ar mums, zvanot - +371 26621676 vai rakstot uz - karkade@karkade.lv."
                        />
                        <Product 
                            id="537467846"
                            title="Sēru štrauss"
                            price={48}
                            image={ProductImagetvelve}
                            description="Mēs izmantojam tikai oriģinālus mūsu floristu veidotus ziedu kompozīciju attēlus. Bildei ir ilustratīva nozīme, jo ziedi ir sezonāli. Ja konkrētie ziedi nebūs pieejami, mēs tos aizvietosim ar citiem, saglabājot konkrēto stilu un krāsu gammu. Mūsu profesionālie floristi vienmēr rūpējas par to, lai kompozīcijas būtu gaumīgas, skaistas un klienti - apmierināti. Ja vēlaties precizēt, vai bildē redzamie ziedi ir dotajā brīdī pieejami, lūdzu, sazinieties ar mums, zvanot - +371 26621676 vai rakstot uz - karkade@karkade.lv."
                        />
                    </div>
                    <div className="productRow">
                        <Product 
                            id="0304204"
                            title="Sēru vainags"
                            price={99.99}
                            image={ProductImagethirteen}
                            description="Mēs izmantojam tikai oriģinālus mūsu floristu veidotus ziedu kompozīciju attēlus. Bildei ir ilustratīva nozīme, jo ziedi ir sezonāli. Ja konkrētie ziedi nebūs pieejami, mēs tos aizvietosim ar citiem, saglabājot konkrēto stilu un krāsu gammu. Mūsu profesionālie floristi vienmēr rūpējas par to, lai kompozīcijas būtu gaumīgas, skaistas un klienti - apmierināti. Ja vēlaties precizēt, vai bildē redzamie ziedi ir dotajā brīdī pieejami, lūdzu, sazinieties ar mums, zvanot - +371 26621676 vai rakstot uz - karkade@karkade.lv."
                        />
                        <Product 
                            id="084238745320"
                            title="Sēru vainags"
                            price={99.99}
                            image={ProductImagefourteen}
                            description="Mēs izmantojam tikai oriģinālus mūsu floristu veidotus ziedu kompozīciju attēlus. Bildei ir ilustratīva nozīme, jo ziedi ir sezonāli. Ja konkrētie ziedi nebūs pieejami, mēs tos aizvietosim ar citiem, saglabājot konkrēto stilu un krāsu gammu. Mūsu profesionālie floristi vienmēr rūpējas par to, lai kompozīcijas būtu gaumīgas, skaistas un klienti - apmierināti. Ja vēlaties precizēt, vai bildē redzamie ziedi ir dotajā brīdī pieejami, lūdzu, sazinieties ar mums, zvanot - +371 26621676 vai rakstot uz - karkade@karkade.lv."
                        />
                        <Product 
                            id="34563463254329"
                            title="Sēru pušķis"
                            price={38}
                            image={ProductImagesixteen}
                            description="Mēs izmantojam tikai oriģinālus mūsu floristu veidotus ziedu kompozīciju attēlus. Bildei ir ilustratīva nozīme, jo ziedi ir sezonāli. Ja konkrētie ziedi nebūs pieejami, mēs tos aizvietosim ar citiem, saglabājot konkrēto stilu un krāsu gammu. Mūsu profesionālie floristi vienmēr rūpējas par to, lai kompozīcijas būtu gaumīgas, skaistas un klienti - apmierināti. Ja vēlaties precizēt, vai bildē redzamie ziedi ir dotajā brīdī pieejami, lūdzu, sazinieties ar mums, zvanot - +371 26621676 vai rakstot uz - karkade@karkade.lv."
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Home;