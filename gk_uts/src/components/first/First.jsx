import styles from './First.module.css';
import Title from '../title/Title';
import { Accordion } from '../accordion/Accordion';
import FirstDay from '../firstday/FirstDay';
import FirstMonth from '../firstmonth/FirstMonth';
import First90Days from '../first90days/First90Days';
import Mission from '../mission/Mission';


const faqList = [
  {
  q: (<Title
    align='left'
    >
    миссия и ценности
  </Title>),
  a: (<Mission />),

  size: 'big',
  color: 'white'
},
  {
    q:
      (<Title
        align="left">
        Как пройдет первый день
      </Title>),
    a: (<FirstDay />),
    size: 'big',
    color: 'white'
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
      // color='white'
      // colorLine='yellow'
      >
     3 месяца, полет нормальный?!
    </Title>),
    a: (<First90Days />),
    size: 'big',
    color: 'white'
  },

];


const First = () => <div className={styles.first}>
  <div className={`container `}>
    <Accordion faqList={faqList} ></Accordion>
  </div>
</div>
export default First;