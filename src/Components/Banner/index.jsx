import React, {useRef} from "react";
import { StyleBanner, Titulo, Parrafo, ImgBanner, Nav, BannerDiv  } from "../../UI";
import imagen1 from "../../assets/imagenes/imagen1.jpg";
import Button from '@mui/material/Button';
import ReactPlayer from "react-player";

const Banner = () => {

    const playerRef = useRef(null);

    const handlePlay = () => {
        const player = playerRef.current.getInternalPlayer();
        if (player) {
          player.requestFullscreen();
        }
      };

    return (
        <StyleBanner>
            <BannerDiv>
                <Titulo>R.P.M. de Franco Escamilla</Titulo>
                <Parrafo>Franco Escamilla es un comediante mexicano muy exitoso. Su show RPM es una de sus presentaciones más populares. En el espectáculo, Franco habla sobre su vida y sus experiencias personales.</Parrafo>
                <Nav> 
                    <Button variant="contained" color="inherit" onClick={handlePlay}>Ver ahora</Button>
                </Nav> 
            </BannerDiv>
            <ReactPlayer
                        url={"https://vimeo.com/437958477"}
                        width={0}
                        height={0}
                        playing={false}
                        controls={true}
                        ref={playerRef}
            />
            <ImgBanner src={imagen1} alt="Imagen de Franco Escamilla" />
        </StyleBanner>
    );
};

export default Banner;