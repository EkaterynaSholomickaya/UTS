import styles from './Footer.module.css';
import logo from '../../assets/icons/logoWhite.svg';
import { ReactComponent as Linked } from '../../assets/icons/linked.svg';
import { ReactComponent as Youtube } from '../../assets/icons/youtube.svg';

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
          <a href="https://www.linkedin.com/company/uts-group">
            {/* <Linked alt="linked" className={styles.footer__links_img} /> */}
            <img src={linked} alt="linked" className={styles.footer__links_img} />
          </a>
          <a href="https://www.youtube.com/channel/UCS9oyiwPEvdPWLTG9us8DHQ">
            {/* <Youtube className={styles.footer__links_img} />
            */}
            <img src={youtube} className={styles.footer__links_img} />
          </a>
        </div>
        <div className={styles.footer__address}>
          <div className={styles.footer__title}>Адрес:</div>
          <p>Россия, Санкт-Петербург, Ленинский проспект, 140-Л</p>
        </div>
        <div className={styles.footer__phones}>
          <div className={styles.footer__title}>Телефоны:</div>
          <a href="">+7 (812) 389 55 55</a><br />
          <a href="">+7 (812) 426 74 47</a>
        </div>


      </div>

    </div>

  </section>
export default Footer;