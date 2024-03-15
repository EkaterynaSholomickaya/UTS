import styles from './Facts.module.css';

const Facts = () => {
  const YearOfFoundation = 1994;
  const currentYear = new Date(). getFullYear() - YearOfFoundation;
  const lastChar = () => {
    switch(currentYear % 10) {
      case 1: return "Год ";
      case 2:
      case 3:
      case 4: return "Года ";
      default: return "Лет ";
      }
    }
return ( <div className={styles.facts}>

    <div className={`container `}>
      <div className={styles.facts__numbers}>

        <div className={`${styles.facts__fact}  ${styles.right} `}>
          <div className={styles.facts__number}>
            {currentYear}
            </div>
          <p className={styles.facts__caption}>           
            {lastChar()}            
          на рынке</p>
        </div>
      
        <div className={`${styles.facts__fact} ${styles.left} ${styles.right}  `}>
          <div className={styles.facts__number}>15</div>
          <p className={styles.facts__caption}>Филиалов <br />РФ и СНГ</p>
        </div>

        <div className={`${styles.facts__fact}  ${styles.left} ${styles.right} `}>
          <div className={styles.facts__number}>7</div>
          <p className={styles.facts__caption}>Лабораторий</p>
        </div>

        <div className={`${styles.facts__fact}  ${styles.left}  `}>
          <div className={styles.facts__number}>5</div>
          <p className={styles.facts__caption}>Зарубежных <br />офисов</p>
        </div>
    </div>
    </div>
  </div>);
}


export default Facts; 