import styles from './First.module.css';
import Title from '../title/Title';
import { Accordion } from '../accordion/Accordion';
import FirstDay from '../firstday/FirstDay';
import FirstMonth from '../firstmonth/FirstMonth';
import First90Days from '../first90days/First90Days';


const faqList = [
  {
    q:
      (<Title
        align="left"
        color="white"
        colorLine="yellow">
        Как пройдет первый день
      </Title>),
    a: (<FirstDay />),
    size: 'big',
    color: 'blue'
  },
  {
    q: (<Title
      align='left'>
      План для первого месяца работы в компании:
    </Title>),
    a: (<FirstMonth />),
    size: 'big',
    color: 'white'
  },
  {
    q: (<Title
      align='left'
      color='white'
      colorLine='yellow'>
      Первые 90 дней работы в компании:
    </Title>),
    a: (<First90Days />),
    size: 'big',
    color: 'blue'
  }

];


const First = () => <div className={styles.first}>

  <div className={`container `}>

    <Accordion faqList={faqList} ></Accordion>
    {/* <div className={styles.accordion__container}> */}
    {/* <Accordion faqList={faqList} blue={true} /> */}
    {/* </div> */}
  </div>
</div>
export default First;