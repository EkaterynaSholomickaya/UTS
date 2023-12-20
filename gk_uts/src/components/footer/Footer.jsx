import styles from './Footer.module.css';
import logo from '../../assets/icons/logoWhite.svg';
import linked from '../../assets/icons/linked.svg';
import youtube from '../../assets/icons/youtube.png';




const Footer = () =>
  <section className={styles.footer}>

    <div className="container">

      <div className={styles.footer__line}>
        <div className={styles.footer__wrapper}>
          <img src={logo} alt="logo" />
          <p className={styles.footer__text} >Крупнейший поставщик химического сырья и пищевых ингредиентов в России и странах СНГ </p>
        </div>
        <div className={styles.footer__links}>
          <img src={linked} alt="linked" />
          <img src={youtube} alt="youtube" />
        </div>
        <div className={styles.footer__address}>
          <div className={styles.footer__title}>Адрес:</div>
          <p>Россия, Санкт-Петербург, Ленинский проспект, 140-Л</p>
        </div>
        <div className={styles.footer__phones}>
          <div className={styles.footer__title}>Телефоны:</div>
          <a href="">+7 (812) 389 55 55</a><br />
          <a href="">+7 (812) 389 55 55</a>
        </div>


      </div>

    </div>

  </section>
export default Footer;