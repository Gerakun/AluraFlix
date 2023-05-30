import React from "react";
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";
import VideoCard from "../VideoCard";
import { useAPI } from "../../../Context/api";


const SliderCarrusel = () => {

    const {videos} = useAPI();

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
     
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
    }
  
  return( 
      <Slider {...settings}>
          {
            videos.map((video,index) =>( 
            <VideoCard key={index} id={video.id} categoria={video.categoria} link={video.link} imagen={video.imagen} titulo={video.titulo} descripcion={video.descripcion} codigo={video.codigo} /> ))
          }
    </Slider>
  );
};

export default SliderCarrusel;