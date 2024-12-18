import React from 'react';
import './Home.css';
import Navbar from '../../comonent/navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner } alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est unde sit possimus aut omnis aliquid, iure, placeat hic aperiam ex, nesciunt rerum. Assumenda, iure quia!</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;