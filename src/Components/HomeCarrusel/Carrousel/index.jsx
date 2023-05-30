import React from "react";
import SliderCarrusel from "../Slider";
import hexToRgba from 'hex-to-rgba';
import { Section, Categoria } from "../../../UI";
import { useAPI } from "../../../Context/api";


const Carrusel = ({colorPrimario,titulo}) => {


    const {videos} = useAPI();
    console.log(videos.length > 0)

    const obj = {backgroundColor: hexToRgba(colorPrimario, 0.6)};
    const estiloCat = {borderColor: colorPrimario};

    return <>
    { 
        videos.length > 0 && <Section style={obj} >
        <Categoria style={estiloCat}>{titulo}</Categoria>
            <SliderCarrusel  videos={videos} />   
        </Section>
    } 
    </>;
};

export default Carrusel;