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
  <section id="main" className={styles.main}>

    <div className={styles.main__container} >
  
      <div className={styles.video}>
        <ReactPlayer 
        url={video} 
        loop={true} 
        controls={false} 
        volume={0} 
        playsinline={true}
        muted={true} 
        playing={true}
        width='100%' height='100%'/> 
      </div>
        <div className={styles.main_poster}/>
  
    </div>

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

      </div>
    </div>


  </section>)
}
export default Main;