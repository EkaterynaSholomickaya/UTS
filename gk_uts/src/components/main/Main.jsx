import styles from './Main.module.css';
import arrowImg from '../../assets/icons/main/arrow.svg';

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

  return (<section className={styles.main}>
    <div className="container">
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
          Этот сайт поможет сориентироваться в первые месяцы
          работы, адаптироваться к новой среде, правилам и
          погрузиться в корпоративную культуру <span> ЕТС</span>
        </p>
        <a href="#data" className={styles.main__link}>
          <span>
            Узнать больше
          </span>
          <img src={arrowImg} alt="arrow" />
        </a>
      </div>
    </div>


  </section>)
}
export default Main;