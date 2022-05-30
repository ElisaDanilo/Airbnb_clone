import React from 'react';
import './Home.css';
import Banner from './components/Banner';
import Card from './components/Card';
import ExperienceCard from './components/ExperienceCard';
import imgParis from "../src/components/assets/img/home_paris.jpg";
import imgBerlin from "../src/components/assets/img/home_berlin.jpg";
import imgRoma from "../src/components/assets/img/home_roma.jpg";
import imgLeft from "../src/components/assets/img/flat3.jpg";
import imgCenter from "../src/components/assets/img/london_penthouse.jpg";
import imgRight from "../src/components/assets/img/london_3bedroom.jpg"; 
import videoExperience from "../src/components/assets/video/videoExperience.mp4";
import videoOnlineExperience from "../src/components/assets/video/onlineExperience.mp4";

function Home() {
  return (
    <div className='home'>
      <div className='home_top'>
    <Banner />
    </div>
    <h2>Let you guide by your curiosity</h2>
    <div className='home_section'>
          <Card 
          src={imgParis}
          title="Paris"
          description="Spend your days visiting museums and eating at delicious restaurants" />
          <Card 
          src={imgBerlin}
          title="Berlin"
          description="Enjoy the culture of this youthful city"/>
          <Card 
          src={imgRoma}
          title="Roma"
          description="Live the Dolce Vita" />
      </div>
      <h2>Ideas for your next adventure</h2>
      <div className='home_section'>
          <Card
          src={imgLeft}
          title="Cozy Flat near Piccadilly Circus"
          description="Stunning view on the Piccadilly Theather " 
          />
          <Card
          src={imgCenter}
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this
          stunning penthouse" 
          />
          <Card
          src={imgRight}
          title="1 Bedroom apartement"
          description="Superhost with great amenities" 
         />
      </div> 
      <h2>Discover our unforgettable experiences</h2>
      <div className='home_experience_section'>
        <ExperienceCard 
       src={videoExperience} type="video/mp4" 
        title="Experiences to live during your trip"
        />
        <ExperienceCard 
       src={videoOnlineExperience} type="video/mp4"
        title="Experiences to enjoy at your home "
        />
      </div>
    </div>
  )};

export default Home