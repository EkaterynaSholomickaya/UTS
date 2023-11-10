// import './header.css';
import styles from './Header.module.css';
import logoImg from '../../assets/icons/logo.png';


function Header() {
  return (
    <header className={styles.header}>

      <div className="container">
        <div className={styles.header__row}>
          <div className={styles.header__logo}>
            <img src={logoImg} alt="logo" />
          </div>
          <nav className={styles.header__nav}>
            <ul>
              <li>
                <a href="https://habr.com/ru/companies/ruvds/articles/460793/" className={styles.header__link}>о компании</a>
              </li>
              <li>
                <a href="#" className={styles.header__link}>работа в етс</a>
              </li>
              <li>
                <a href="#" className={[styles.header__link, styles.header__link_btn].join(' ')}>вопросы</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header >
  );
}

export default Header;