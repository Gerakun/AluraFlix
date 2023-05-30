import { colorPrimario } from "../UI/variables";
import styled from "styled-components";

//Estilos Header
export const StyleHeader = styled.nav`
  background-color: ${colorPrimario};
  display: flex;
  justify-content: space-between;
  padding: 0 3vw;
  height: 10vh;
  align-items: center;
`

export const Logo = styled.img`
    height: 35px;
    width: 35px;
    align-items: center;
    @media (max-width:425px) {
        display: none;
    }
    
`
export const Logo2 = styled.img`
    height: 40px;
    width: 169px;
    @media (max-width:425px) {
        height: 30px;
        width: 127px;
    }
`

//Estilos Banner
export const StyleBanner = styled.nav`
    background-color: #0D7FF1;
    display: flex;
    @media (max-width:425px) {
        flex-direction: column-reverse;
    }

`
export const Titulo = styled.h1`
    color: white;
    font-size: 60px;
    text-shadow: #484848 6px 2px 2px;
    padding: 20px 40px;
    @media (max-width:800px) {
        font-size: 40px;
    }
    @media (max-width:425px) {
        font-size: 30px;
    }
`

export const Parrafo = styled.p`
   
    color: white;
    font-size: 30px;
    text-shadow: #555 4px 2px 3px;
    text-align: justify;
    padding: 20px 40px;
    @media (max-width:800px) {
        font-size: 25px;
    }
    @media (max-width:425px) {
        font-size: 20px;
    }

`
export const ImgBanner = styled.img`
    width:50%;
    height: 450px;
    @media (max-width:425px) {
        width: 100%;
        height:200px;
    }
`
export const Nav = styled.nav`
    padding: 0px 40px;
`
export const BannerDiv = styled.nav`
    width: 50%;
    height: 450px;
    display: flex;
    flex-direction: column;
    @media (max-width:425px) {
        width: 100%;
        height: 315px;
    }
`

//Estilos carrusel
export const Section = styled.section`
    width: 100%;
    box-sizing: border-box;
    padding: 20px 40px;
    
`
export const Categoria = styled.h1`
    color: white;
    font-size: 40px;
    text-shadow: #484848 3px 2px 2px;
    border-bottom: 4px solid;
    display: inline-block;
    padding-bottom: 10px;
`

//Estilos VideoCard
export const VideoConatiner = styled.div`
    width: 385px;
    height: 225px;
    border-radius: 25px;
    overflow: hidden;
    @media (max-width:1025px) {
        width: 285px;
        height: 205px;  
    }
    @media (max-width:425px) {
        width: 215px;
        height: 150px; 
    }   
`

export const TituloV = styled.h3`
    color: white;
    font-size: 30px;
    text-shadow: #484848 3px 2px 2px;
    padding: 5px 10px;
`

//Estilos footer
export const StyleFooter = styled.nav`
  background-color: ${colorPrimario};
  height: 20vh;
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column;
`

export const LogoF = styled.img`
    height: 40px;
    width: 169px;
`

export const ParrafoF = styled.p`
    font-size: 15px;
    color: white;
    padding: 5px;
`

//Estilos FormularioVideo
export const Botones = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    margin-bottom: 5px;
    @media (max-width:425px) {
        display: flex;
        flex-direction: column;
        gap: 10px; 
    }
`
export const Div = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-between;
    @media (max-width:425px) {
        width: 75%;
    }
`
//Estilos NewCategory
export const Div2 = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 20px;
    @media (max-width:425px) {
        width: 95%;
    }
    `