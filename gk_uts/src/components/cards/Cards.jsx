import styles from './Cards.module.css';
import Card from '../card/Card';
import firstImg from '../../assets/icons/main/grow.svg';
import secondImg from '../../assets/icons/main/question.svg';
import thirdImg from '../../assets/icons/main/handshake.svg';

const card_items = [
  {
    img: firstImg,
    text: `Пусть первые дни в ЕТС пройдут комфортно и эффективно, а мы всегда готовы поддержать Вас на этом пути `
  },
  {
    img: secondImg,
    text: ` Если у Вас возникнут вопросы, пожалуйста обращайтесь в отдел персонала  `
  },
  {
    img: thirdImg,
    text: `Мы будем рады помочь! `
  }
];

const Cards = () => <div className={styles.cards}>

  {
    card_items.map(item => <Card img={item.img} text={item.text} />)
  }

</div>

export default Cards;