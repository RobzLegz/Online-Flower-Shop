import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerInfoContainer">
                <div className="footerColumn">
                    <h2>KOMPĀNIJA</h2>
                    <p>Piegādes nosacījumi un cenas</p>
                    <p>Juridiska atsauce</p>
                    <p>Lietošanas nosacījumi</p>
                    <p>Par mums</p>
                    <p>Privātuma politika</p>
                    <p>Mūsu kontakti un rekvizīti</p>
                    <p>Lapas karte</p>
                    <p>Veikali</p>
                </div>
                <div className="footerColumn">
                    <h2>JŪSU KONTS</h2>
                    <p>Personīgā informācija</p>
                    <p>Pasūtījumi</p>
                    <p>Kredīta izraksti</p>
                    <p>Adreses</p>                   
                </div>
                <div className="footerColumn noEffectColumn">
                    <h2>VEIKALA INFORMĀCIJA</h2>
                    <p>Bēru Vainagi</p>
                    <p>SIA "Karkadē"</p>
                    <p>Tērbatas iela 19/21, Rīga, LV-1010</p>
                    <p>Reg.nr.50103327811</p>
                    <p>Telefona nr.: +37126621676</p>
                    <p>E-pasts: <strong>karkade@karkade.lv</strong></p>
                </div>
            </div>
            <div className="copyrightContainer">
                <p>© Bēruvainagi 2021 visas tiesības aizsargātas</p>
            </div>
        </div>
    )
}

export default Footer
