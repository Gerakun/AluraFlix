import React from "react";
import Banner from "../Components/Banner";
import Carrusel from "../Components/HomeCarrusel/Carrousel";
import { useAPI } from "../Context/api";


const Home = () =>{

    const {categorias, videos} = useAPI();

    return (
        <>
        <Banner />        
        {
            categorias.map((categoria) =>
            
            <Carrusel
                key={categoria.titulo} 
                id={categoria.id} 
                colorPrimario={categoria.colorPrimario}
                titulo={categoria.titulo} descripcion={categoria.descripcion}
                videos={videos.filter(video => video.categoria === categoria.titulo)} /> 
                )}       
        </>
    );
};

export default Home;