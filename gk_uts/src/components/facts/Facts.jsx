import styles from './Facts.module.css';
import check from '../../assets/icons/check.svg';


const Facts = () =>
  <div className={styles.facts}>

    <div className={`container `}>
      <div className={styles.facts__numbers}>

        <div className={`${styles.facts__fact}  ${styles.right} ${styles.bottom} `}>
          <div className={styles.facts__number}>1994</div>
          <p className={styles.facts__caption}>Год основания</p>
        </div>

        <div className={`${styles.facts__fact}  ${styles.left} ${styles.right} ${styles.bottom} `}>
          <div className={styles.facts__number}>7</div>
          <p className={styles.facts__caption}>Лабораторий</p>
        </div>
        <div className={`${styles.facts__fact}  ${styles.left} ${styles.right} ${styles.bottom} `}>
          <div className={styles.facts__number}>750</div>
          <p className={styles.facts__caption}>Сотрудников</p>
        </div>

        <div className={`${styles.facts__fact} ${styles.left}  ${styles.bottom} `}>
          <p className={styles.facts__caption}>Более</p>
          <div className={styles.facts__number}>6000</div>
          <p className={styles.facts__caption}>постоянных клиентов</p>
        </div>

        <div className={`${styles.facts__fact} ${styles.top}${styles.right} `}>
          <div className={styles.facts__number}>3</div>
          <p className={styles.facts__caption}>Производственных  <br /> площадки</p>
        </div>

        <div className={`${styles.facts__fact} ${styles.top} ${styles.left} ${styles.right}  `}>
          <div className={styles.facts__number}>15</div>
          <p className={styles.facts__caption}>Филиалов <br />РФ и СНГ</p>
        </div>

        <div className={`${styles.facts__fact} ${styles.top} ${styles.left} ${styles.right} `}>
          <div className={styles.facts__number}>5</div>
          <p className={styles.facts__caption}>Зарубежных <br />офисов</p>
        </div>

        <div className={`${styles.facts__fact} ${styles.top} ${styles.left} `}>
          <div className={styles.facts__number}>1994</div>
          <p className={styles.facts__caption}>Год основания</p>
        </div>

      </div>
      <div className={styles.facts__items}>
        <div className={`${styles.facts__item}`}>
          <div className={styles.facts__item_numbers}>45 000</div>
          <p className={styles.facts__item_caption}>квадратных метров  <br /> складов</p>
        </div>
        <div className={`${styles.facts__item}`}>
          <div className={styles.facts__item_img}><img src={check} alt="check" /></div>
          <p className={`${styles.facts__item_bigCaption}`}>Наивысший рейтинг финансовой устойчивости (ААА)</p>
        </div>
        <div className={`${styles.facts__item}`}>
          <div className={styles.facts__item_numbers}> <span>$</span>  466 200 000</div>
          <p className={styles.facts__item_caption}>квадратных метров  <br /> складов</p>
        </div>
        <div className={`${styles.facts__item}`}>
          <div className={styles.facts__item_img}><img src={check} alt="check" /></div>
          <p className={`${styles.facts__item_bigCaption}`}>№ 20 в рейтинге ICIS для Европы (2022г.)</p>
        </div>
      </div>
    </div>
  </div>


export default Facts; 