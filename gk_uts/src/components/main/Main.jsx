import styles from './Main.module.css';
import video from '../../assets/video/main.mp4';
import ReactPlayer from 'react-player'
import swipeup from '../../assets/icons/swipeup.svg';
import { useEffect, useState } from 'react';


const Main = () => {

  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      }
      else {
        setBackToTop(false);
      }
    })
  })

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
  <section className={styles.main}>

    <div className={styles.main__container} >
      <div className={styles.video}>
        <ReactPlayer 
          className={styles.react_player}
          url={video} 
          loop={true} 
          controls={false} 
          volume={0} 
          playsinline={true}
          muted={true} 
          playing={true}
          width='100%' height='auto'/> 
        </div>
      </div>


    {/* <video autoPlay muted loop>
      <source src={video} type="video/mp4"/>
    </video> */}
    {/* <iframe className={styles.main__video} src="https://www.youtube.com/embed/4Ls8lO__LC4?si=9VeUeBxsi6E07gFC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    
    <div className={`container `}>
      <div className={styles.main__arrow}>
        {backToTop && <button onClick={scrollUp}>
          <img src={swipeup} alt="arrow" className={styles.arrow} />
        </button>}
      </div>

      <div className={styles.main__column}>
        <h1 className={styles.main__title}>
          Добро пожаловать на борт ГК ЕТС!
        </h1>
        <p className={styles.main__subtitle}>
          Этот сайт поможет сориентироваться в первые месяцы работы, 
          адаптироваться к новой среде, 
          правилам и погрузиться в корпоративную культуру <span> ГК ЕТС </span>
        </p>

        {/* <a href="#data" className={styles.main__link}>
          <span>
            Узнать больше
          </span>
          <img src={arrowImg} alt="arrow" />
        </a> */}
      </div>
    </div>


  </section>)
}
export default Main;