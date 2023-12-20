// import './header.css';
import styles from './Header.module.css';
import logoImg from '../../assets/icons/logo.png';
import { ReactComponent as Icon } from '../../assets/icons/icon.svg';
import { useState } from 'react';


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.header}>

      <div className="container">
        <div className={styles.header__row}>
          <div id="logo" className={styles.header__logo}>
            <img src={logoImg} alt="logo" />
          </div>
          <div>
            <nav className={`${styles.header__nav} ${isOpen ? styles.active : ''}`} >
              <ul>
                <li>
                  <a href="#about" className={styles.header__link}>о компании</a>
                </li>
                <li>
                  <a href="#work" className={styles.header__link}>работа в етс</a>
                </li>
                <li>
                  <a href="#questions" className={[styles.header__link, styles.header__link_btn].join(' ')}>вопросы</a>
                </li>
              </ul>
            </nav>
            <button className={styles.header__menu_button} onClick={() => setIsOpen(!isOpen)}>
              <div className={`${styles.icon__top} ${isOpen ? styles.active : ''}`} > </div>
              <div className={`${styles.icon__bottom} ${isOpen ? styles.active : ''}`} > </div>
              {/* <Icon /> */}
            </button>
          </div>
        </div >
      </div >
    </header >
  );
}

export default Header;