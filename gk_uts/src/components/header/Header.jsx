import styles from './Header.module.css';
import logoImg from '../../assets/icons/logo.png';
import { useState, useEffect } from 'react';

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('modalOpen', isOpen);
  }, [isOpen])

  return (
    <header className={`${styles.header} header`}>

      <div className="container">
        <div className={styles.header__row}>
          <div id="logo" className={styles.header__logo}>
            <a href="#main">
              <img src={logoImg} alt="logo" />
            </a>
          </div>
          <div>

            <nav
              className={`${styles.header__nav} ${isOpen ? styles.active : ''}`}
              onClick={e => {
                e.stopPropagation();
              }} >
              <ul>
                <li className={styles.header__link_first}>
                  <a href="#data"
                    className={[styles.header__link].join(' ')}
                    onClick={(e) => setIsOpen(!isOpen)}>
                    о компании
                  </a>
                </li>
                <li>
                  <a href="#work"
                    className={styles.header__link}
                    onClick={(e) => setIsOpen(!isOpen)}>
                    работа в етс</a>
                </li>
                <li>
                  <a href="#questions"
                    className={[styles.header__link, styles.header__link_btn].join(' ')}
                    onClick={(e) => setIsOpen(!isOpen)}>вопросы</a>
                </li>
              </ul>
            </nav>
            <div
              className={`${styles.header__bg} ${isOpen ? styles.activeBg : ''}`}
              onClick={
                (e) => {
                  setIsOpen(!isOpen);
                }}>
            </div>
          </div>
          <button
            className={styles.header__menu_button}
            onClick={(e) => {
              setIsOpen(!isOpen);
            }}>
            <div className={`${styles.icon__top} ${isOpen ? styles.active : ''}`} > </div>
            <div className={`${styles.icon__bottom} ${isOpen ? styles.active : ''}`} > </div>
          </button>

        </div >
      </div >
    </header >
  );
}

export default Header;