import styles from './Values.module.css';
import Title from '../title/Title';
import Value from '../value/Value';

import firstImg from '../../assets/icons/values/1.svg';
import secondtImg from '../../assets/icons/values/2.svg';
import thirdImg from '../../assets/icons/values/3.svg';
import fourthImg from '../../assets/icons/values/4.svg';
import fifthImg from '../../assets/icons/values/5.svg';
import sixthImg from '../../assets/icons/values/6.svg';
import seventhImg from '../../assets/icons/values/7.svg';
import eighthImg from '../../assets/icons/values/8.svg';

const value_items = [
  {
    img: firstImg,
    title: `ПРОФЕССИОНАЛИЗМ И КОМПЕТЕНТНОСТЬ `,
    text: `Все, что мы делаем, мы делаем квалифицированно и лучше, чем другие. Мы досконально знаем и разбираемся во всех вопросах и продуктах, которые являются предметом нашего бизнеса. Мы заслужили уважение наших клиентов за глубину и объем знаний предмета и всегда готовы проинформировать их о новых продуктах и технологиях.`
  },
  {
    img: secondtImg,
    title: `ВЗАИМОУВАЖЕНИЕ И ДРУЖЕЛЮБИЕ `,
    text: `Мы воспитанные люди. Мы работаем с людьми и для людей.`
  },
  {
    img: thirdImg,
    title: `ВЗАИМОДЕЙСТВИЕ И ВЗАИМОВЫРУЧКА `,
    text: `Мы единое целое. Мы части одного организма. У нас одна цель. Мы одна команда.`
  },
  {
    img: fourthImg,
    title: `ЭФФЕКТИВНОСТЬ И РЕЗУЛЬТАТИВНОСТЬ `,
    text: `Мы помним, что из результата каждого сотрудника в отдельности, складывается общий результат нашей Компании. И не важно, работаете Вы в офисе или на складе, продаете товар клиенту или сопровождаете данную продажу, все это часть общего дела.`
  },
  {
    img: fifthImg,
    title: `ОТВЕТСТВЕННОСТЬ`,
    text: `Честное отношение к своей работе. Любую работу в компании сотрудники выполняют с чувством собственного достоинства и самоуважения.`
  },
  {
    img: sixthImg,
    title: `ДЕЛАТЬ И СДЕЛАТЬ`,
    text: `  – это два разных понятия. Начатое дело мы доводим до конца, работаем не на процесс, а на результат.`
  },
  {
    img: seventhImg,
    title: `СТРЕМЛЕНИЕ К УСПЕХУ `,
    text: `Мы ставим амбициозные планы и стремимся их осуществить.`
  },
  {
    img: eighthImg,
    title: `ПОСТОЯННОЕ СОВЕРШЕНСТВОВАНИЕ`,
    text: `Мы открыты к новому, готовы меняться, готовы учиться и готовы идти на продуманный риск. В любом бизнесе мы стремимся быть в тройке лидеров.
`
  },
];

const Values = () =>
  <section className={styles.values}>
      <div className={styles.values__title}>
        <Title align='center' >Наши ценности</Title>
      </div>
      {
        value_items.map((item, index) => <Value img={item.img} text={item.text} title={item.title} key={index} />)
      }
  </section>

export default Values;