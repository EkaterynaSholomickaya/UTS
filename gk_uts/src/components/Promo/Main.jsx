import styles from './Main.module.css';
import arrowImg from '../../assets/icons/main/arrow.svg';


const Main = () =>
  <section className={styles.main}>
    <div className="container">
      <div className={styles.main__column}>
        <h1 className={styles.main__title}>
          Добро пожаловать на борт ГК ЕТС!
        </h1>
        <p className={styles.main__subtitle}>
          Этот сайт поможет сориентироваться в первые месяцы
          работы, адаптироваться к новой среде, правилам и
          погрузиться в корпоративную культуру <span> ЕТС</span>
        </p>
        <a href="" className={styles.main__link}>
          <span>
            Узнать больше
          </span>
          <img src={arrowImg} alt="arrow" />
        </a>
      </div>
    </div>


  </section>

export default Main;