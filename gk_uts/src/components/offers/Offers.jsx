import styles from './Offers.module.css';
import Title from '../title/Title';

import first from '../../assets/icons/offers/1.svg';
import second from '../../assets/icons/offers/2.svg';
import third from '../../assets/icons/offers/3.svg';
import fourth from '../../assets/icons/offers/4.svg';
import fifth from '../../assets/icons/offers/5.svg';
import sixth from '../../assets/icons/offers/6.svg';
import seventh from '../../assets/icons/offers/7.svg';
import eighth from '../../assets/icons/offers/8.svg';



const Offers = () =>
  <section className={styles.offers}>

    <div className="container">
      <div className={styles.offers__container}>
        <div className={styles.offers__text_container}>
          <Title align='center'> 8 причин работать в <span>ЕТС</span> : </Title>
        </div>
        <p className={styles.offers__text}>
          <span>ЕТС </span>сегодня – это международная команда. Находясь в стадии роста, мы предлагаем нашим сотрудникам широкие возможности профессиональной и личной реализации.
        </p>
      </div>

      <div className={styles.offers__table}>
        <div className={styles.offer}>
          <img className={styles.offer__img} src={first} alt="" />
          <div className={styles.offer__text}>
            <span>Уверенность и стабильность.</span><br /> Работа в крупной компании - лидере на рынке дистрибуции химических продуктов и поставщика индивидуальных решений на рынке строительных систем.
          </div>
        </div>
        <div className={styles.offer}>
          <img className={styles.offer__img} src={second} alt="" />
          <div className={styles.offer__text}>
            <span> Конкурентная  “белая” зарплата</span> и, практически, неограниченные возможности увеличивать свой доход за счет роста прибыльности продаж.
          </div>
        </div>
        <div className={styles.offer}>
          <img className={styles.offer__img} src={third} alt="" />
          <div className={styles.offer__text}>
            <span>Забота о сотрудниках:</span><br /> комфортабельный и все необходимое для эффективной работы. ДМС после 6 месяцев работы.
          </div>
        </div>
        <div className={styles.offer}>
          <img className={styles.offer__img} src={fourth} alt="" />
          <div className={styles.offer__text}>
            <span>  Открытость руководства компании.</span><br /> Возможность предлагать новые направления бизнеса, совершенствовать бизнес-модель и реализовывать новые проекты.</div>
        </div>
        <div className={styles.offer}>
          <img className={styles.offer__img} src={fifth} alt="" />
          <div className={styles.offer__text}>
            <span> Международный опыт:</span> участие в выставках, работа с зарубежными поставщиками, взаимодействие с нашими представительствами в Швеции, Китае, Индии и Турции.
          </div>
        </div>
        <div className={styles.offer}>
          <img className={styles.offer__img} src={sixth} alt="" />
          <div className={styles.offer__text}>
            Мотивированная на результат и развитие команда профессионалов. Неформальный слоган сотрудников компании: <span> У нас все получаЕТСя!</span>
          </div>
        </div>
        <div className={styles.offer}>
          <img className={styles.offer__img} src={seventh} alt="" />
          <div className={styles.offer__text}>
            <span> Обучение и развитие.</span><br />
            В рамках проекта «Школа ЕТС» мы оказываем сотрудникам поддержку в повышении квалификации, участие в профессиональных конференциях, изучении английского языка (курсы в офисе и Speaking Club). А для самых успешных и амбициозных – возможности карьерного роста.
          </div>
        </div>
        <div className={styles.offer}>
          <img className={styles.offer__img} src={eighth} alt="" />
          <div className={styles.offer__text}>
            <span> Насыщенная корпоративная жизнь:</span><br /> В компании есть свои традиции, для всех сотрудников мы проводим корпоративные мероприятия, конкурсы, тренинги, встречи по обмену опытом, поддерживаем спортивные увлечения. Мы делаем все, чтобы работать у нас было комфортно и приятно
          </div>
        </div>
      </div>
    </div>

  </section>
export default Offers;