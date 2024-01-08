import { useRef } from 'react';
import React from "react";
import styles from './Accordion.module.css';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';



export const AccordionItem = ({ faqItem, onClick, isOpen, blue }) => {

  console.log(blue);

  const itemRef = useRef(null);

  return (
    <li className={styles.accordin__item} >
      <button
        className={`${styles.accordion__header} ${blue ? styles.blue : ''} `}
        onClick={() => onClick()}>
        {faqItem.q}
        <ArrowIcon className={`${styles.according__arrow} ${isOpen ? styles.active : ""}`} />
      </button>
      <div
        className={`${styles.accordin__collapse} `}
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }} >
        <div className={styles.accordion__body} ref={itemRef}>
          {faqItem.a}
        </div>
      </div>

    </li>
  )
}
