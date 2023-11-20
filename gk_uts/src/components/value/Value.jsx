import styles from './Value.module.css';


const Value = ({ img, title, text }) =>
  <section className={styles.value}>
    <div className={styles.value__img}>
      <img src={img} alt="" />
    </div>
    <div className={styles.value__container}>
      <h3 className={styles.value__title}>{title} </h3>
      <p className={styles.value__text}> {text}</p>
    </div>
  </section>

export default Value;