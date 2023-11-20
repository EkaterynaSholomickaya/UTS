import style from './Card.module.css';

const Card = ({ img, text }) =>

  <div className={style.card}>
    <div className={style.card__img}>
      <img src={img} alt="img" />
    </div>
    <p className={style.card__text}>{text}</p>
  </div>

export default Card;