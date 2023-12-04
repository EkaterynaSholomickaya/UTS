import { useState } from 'react';
import styles from './Slider.module.css';
import { ReactComponent as Prev } from '../../assets/icons/prev.svg';
import { ReactComponent as Next } from '../../assets/icons/next.svg';




const Slider = ({ children }) => {
  const [activeId, setActiveId] = useState(3);

  const prev = () => {
    setActiveId(activeId => {
      if (activeId > 0) {
        return activeId - 1
      }
      return activeId
    })
  }

  const next = () => {
    setActiveId(activeId => {
      if (activeId < children.length - 1) {
        return activeId + 1
      }
      return activeId
    })
  }

  return (

    <section className={styles.slider}>

      <div className={styles.actions}>

        <div className={styles.prev} onClick={prev}>
          <Prev className={styles.prevP} />
        </div>

        {children.map((slide, idx) => (
          <div className={`${styles.slide} ${idx === activeId ? styles.active : ''}`}>
            {slide}
          </div>
        ))}

        <div className={styles.next} >
          <Next className={styles.nextP} onClick={next} />
        </div>
      </div>

    </section>)
}
export default Slider; 