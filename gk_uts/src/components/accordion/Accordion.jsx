import React, { useState } from 'react';
import styles from './Accordion.module.css';
import { AccordionItem } from './AccordionItem';

export const Accordion = ({ faqList }) => {
  const [openId, setId] = useState(null);


  return (
    <ul className={styles.accordion}>
      {faqList.map((faqItem, id) => {
        return (
          <AccordionItem
            onClick={() => (id === openId ? setId(null) : setId(id))}
            faqItem={faqItem}
            isOpen={id === openId}
            key={id}
          />
        )
      })}
    </ul>
  )
}


// disable = { id === faqList.length - 1 ? 'right' : id === 0 ? 'left' : null}