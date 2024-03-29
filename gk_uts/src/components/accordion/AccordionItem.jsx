import { useRef } from 'react';
import React from "react";
import styles from './Accordion.module.css';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';



export const AccordionItem = ({ faqItem, onClick, isOpen, blue }) => {

  const itemRef = useRef(null);

  return (
    <li className={`${styles.accordion__item} ${faqItem.size ? styles.bigF : ''} `} onClick={e =>e.stopPropagation()}>
      <button
        className={`${styles.accordion__header} ${blue ? styles.blue : ''} ${faqItem.color === 'white' ? styles.white : ''} ${faqItem.color === 'blue' ? styles.darckblue : ''}`}
        onClick={(e) => {
          const scroll = () => {
          const EL_POSITION = window.pageYOffset+e.target.getBoundingClientRect().top
          if (!isOpen){
              window.scrollTo({
                top: EL_POSITION - 80,
                behavior: "smooth",
              })}}
            
          setTimeout(scroll,400)
          onClick();  
        }
        }>
        {faqItem.q}
        <ArrowIcon className={`${styles.according__arrow} ${isOpen ? styles.active : ""}`} />
      </button>
      <div
        className={`${styles.accordin__collapse} `}
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }} >
        <div className={`${styles.accordion__body} ${faqItem.size ? 'bigBody' : ''}`} ref={itemRef}>
          {faqItem.a}
        </div>
      </div>

    </li>
  )
}
