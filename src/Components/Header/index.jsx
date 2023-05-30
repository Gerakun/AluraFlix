import React from "react";
import logo from "../../assets/imagenes/logo.png";
import aluraflix from "../../assets/imagenes/aluraflix.png";
import Button from '@mui/material/Button';
import { StyleHeader, Logo, Logo2 } from "../../UI";
import { Link } from "react-router-dom"; 
 

const Header = () => {
    return (
        <StyleHeader>
            <div>
                <Link to="/"><Logo2 src={aluraflix} alt="Aluraflix"></Logo2><Logo src={logo} alt="logo streaming" /></Link> 
            </div>
            <Link to="/Add-video"><Button variant="contained" size="lage">Agregar video</Button></Link>
        </StyleHeader>
    )
     
};

export default Header;