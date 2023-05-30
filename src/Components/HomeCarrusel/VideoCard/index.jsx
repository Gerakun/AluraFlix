import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import { VideoConatiner, TituloV } from "../../../UI";


function VideoCard({id,link,imagen,titulo,categoria,descripcion}) {
    
    const playerRef = useRef(null);

    const handlePlay = () => {
      const player = playerRef.current.getInternalPlayer();
      if (player) {
        player.requestFullscreen();
      }
    };

const linkVideo = link;
const imgLink = imagen;


  return (
    <div>
        <VideoConatiner>
            <ReactPlayer 
        url={linkVideo}
        width={385}
        height={225}
        playing={true}
        controls={true}
        light={imgLink}
        ref={playerRef}
        onPlay={handlePlay}
        />
        </VideoConatiner>
      
      <TituloV>{titulo}</TituloV>
    </div>
  );
}

export default VideoCard;