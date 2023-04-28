import React from "react";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import videoMp4 from '../images/GlassM5.mp4';
function SeventhPage (){

    const [isPlayVideo, setIsPlayVideo] = useState(false);
    const reff= useRef(null);
    
    const pauseVideo = () =>{
        setIsPlayVideo(!isPlayVideo);
        reff.current.pause();   
    }
    const playVideo =()=>{
        setIsPlayVideo(!isPlayVideo);
        reff.current.play();
    }
    return(
        <div className="seventhPage">
            <div className="row">
                    <div className="button-play" onClick={playVideo }>
                        <div className="animation"></div>
                        <FontAwesomeIcon icon={faPlay} />
                        <h2>Watch Video</h2>
                    </div>
            </div>
            <div className={isPlayVideo ? "video play" : "video"} onClick={pauseVideo}  >
                <div className="content">
                   <video  ref={reff} width="100%" height="100%" controls>
                        <source src={videoMp4} type="video/mp4" />
                   </video>
                </div>
            </div>
            <div className={isPlayVideo ? "close-button visible" : "close-button"} onClick={pauseVideo}>
                <FontAwesomeIcon icon={faClose} />
            </div>
            <div className="overlay"></div>
        </div>
    );
}
export default SeventhPage;