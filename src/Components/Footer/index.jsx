import React from "react";
import aluraflix from "../../assets/imagenes/aluraflix.png";
import { StyleFooter, LogoF, ParrafoF } from "../../UI";


const Footer = () => {
    return (
        <StyleFooter>
            <LogoF src={aluraflix} alt="Aluraflix" />
            <ParrafoF>Desarrollador por:</ParrafoF>
            <ParrafoF>Rubén Gerardo Rios Hernández</ParrafoF>
        </StyleFooter>
    )
     
};

export default Footer;