import React from 'react';
import "./css/ExperienceCard.css";
import ReactPlayer from 'react-player';
import 'video-react/dist/video-react.css';

const ExperienceCard = ({src, title}) =>  {

  return (
    <div className='experience_card'>
      <div className='experience_video'>
      <ReactPlayer url={src} volume={null} muted={true} playing={true} loop={true} width="400" height="450"/> 
      </div>
        <div className='experience_card_info'>
            <h3>{title}</h3>
        </div>
    </div>
  )
}

export default ExperienceCard