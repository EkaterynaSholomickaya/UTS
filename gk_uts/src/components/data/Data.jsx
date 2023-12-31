import styles from './Data.module.css';
import Title from '../title/Title';




const Data = () => <div id='data' className={styles.data}>

  <div className={`container `}>
    <div className={styles.data__container}>
      <div className={styles.title__container}>
        <Title> Немного фактов </Title>
      </div>
      <p className={styles.data__text}>
        С момента своего основания в 1994 году, <span>ГК ЕТС</span>  (Единая Торговая Система) непрерывно развивалась, становясь крупнейшим дистрибьютором на рынке России и СНГ.
        <br />
        Стратегия роста <span> ГК ЕТС</span> основана на непрерывном повышении уровня профессионализма, диверсификации портфеля продуктов и освоении новых рынков. Мы стремимся к расширению международного присутствия и применению современных технологий, в том числе цифровых, для обслуживания наших клиентов и работы с поставщиками. Наш главный капитал – это наши сотрудники.</p>
    </div>
  </div>
</div>
export default Data;