import Title from '../title/Title';
import Slider from '../../components/slider/Slider';
import styles from './About.module.css';


import React from "react";

import photo1 from '../../assets/img/1.jpg';
import photo2 from '../../assets/img/2.jpg';
import photo3 from '../../assets/img/3.jpg';
import photo4 from '../../assets/img/4.jpg';
import photo5 from '../../assets/img/5.jpg';
import photo6 from '../../assets/img/6.jpg';
import photo7 from '../../assets/img/7.jpg';
import photo8 from '../../assets/img/8.jpg';
import photo9 from '../../assets/img/9.jpg';
import photo10 from '../../assets/img/10.jpg';
import photo11 from '../../assets/img/11.jpg';
import photo12 from '../../assets/img/12.jpg';
import photo13 from '../../assets/img/13.jpg';
import photo14 from '../../assets/img/14.jpg';
import photo15 from '../../assets/img/15.jpg';
import photo16 from '../../assets/img/16.jpg';
import photo17 from '../../assets/img/17.jpg';
import photo18 from '../../assets/img/18.jpg';




const About = () => {



  return (
    <div id='about' className={styles.about}>
      <div className="container">

        <div className={styles.title__container}>
          <Title
            align='center'>
            О жизни в компании
          </Title>
        </div>

        <Slider>
          <img src={photo1} alt="photo1" />
          <img src={photo2} alt="photo2" />
          <img src={photo3} alt="photo3" />
          <img src={photo4} alt="photo4" />
          <img src={photo5} alt="photo5" />
          <img src={photo6} alt="photo6" />
          <img src={photo7} alt="photo7" />
          <img src={photo8} alt="photo8" />
          <img src={photo9} alt="photo9" />
          <img src={photo10} alt="photo10" />
          <img src={photo11} alt="photo11" />
          <img src={photo12} alt="photo12" />
          <img src={photo13} alt="photo13" />
          <img src={photo14} alt="photo14" />
          <img src={photo15} alt="photo15" />
          <img src={photo16} alt="photo16" />
          <img src={photo17} alt="photo17" />
          <img src={photo18} alt="photo18" />
        </Slider>

      </div>

    </div>)
}

export default About;