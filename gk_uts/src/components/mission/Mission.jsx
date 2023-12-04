import styles from './Mission.module.css';
import Title from '../title/Title';



const Mission = () =>
  <section className={styles.mission}>

    <div className="container">
      <div className={styles.mission__container}>
        <div className={styles.mission__title_container}>
          <Title> Миссия </Title>
        </div>
        <p className={styles.mission__text}>
          Мы видим свою миссию в сочетании традиций и современного новаторского подхода к рынку. В работе на благо наших клиентов, партнеров, сотрудников, и стран, в которых мы работаем.
          <br /> Конечная цель — повышение благосостояния наших сотрудников и их семей, партнеров, и страны в целом, за счет устойчивого повышения эффективности нашей работы и получения прибыли. Мы стремимся быть ориентиром для рынка, оказывать влияние на него и внедрять инновации.
        </p>
      </div>
    </div>

  </section>
export default Mission;