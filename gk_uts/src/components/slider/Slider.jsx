import { useState } from 'react';
import styles from './Slider.module.css';
import { ReactComponent as Prev } from '../../assets/icons/prev.svg';
import { ReactComponent as Next } from '../../assets/icons/next.svg';
import { ReactComponent as PrevSmall } from '../../assets/icons/prevSmall.svg';
import { ReactComponent as NextSmall } from '../../assets/icons/nextSmall.svg';




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

        <div className={`${styles.prev}`} onClick={prev}  >
          <Prev className={`${styles.prevP} ${activeId === 0 ? styles.disable : ''}`} />
        </div>

        <div className={`${styles.prevSmall}`} onClick={prev}  >
          <PrevSmall className={`${styles.prevP} ${activeId === 0 ? styles.disable : ''}`} />
        </div>


        {children.map((slide, idx) => (
          <div className={`${styles.slide} ${idx === activeId ? styles.active : ''}`}>
            {slide}
          </div>
        ))}

        <div className={`${styles.next} }`} >
          <Next className={`${styles.nextP} ${activeId === children.length - 1 ? styles.disable : ''}`} onClick={next} disable='false' />
        </div>


        <div className={`${styles.nextSmall} }`} >
          <NextSmall className={`${styles.nextP} ${activeId === children.length - 1 ? styles.disable : ''}`} onClick={next} disable='false' />
        </div>

      </div>

    </section>)
}
export default Slider;
