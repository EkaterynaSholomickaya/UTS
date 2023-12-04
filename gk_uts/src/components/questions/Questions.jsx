import styles from './Questions.module.css';
import Title from '../title/Title';
import { Accordion } from '../accordion/Accordion';


const faqList = [
  {
    q: "Как принято одеваться в компании ?",
    a: `Дресс-код в нашей компании соответствует стилю «Business casual» или  «повседневный деловой стиль одежды».Для мужчин предпочтителен деловой костюм. Если нет переговоров, то возможны джинсы, джемпера, пуловеры. Рубашка предпочтительно одноцветная. Обязателен ремень. Для женщин деловой костюм, жакет, жилет, юбка, брюки или платье. Сочетание блуза - юбка или блуза брюки. Умеренный макияж и парфюм.`
  },
  {
    q: "Что делать если отсутствуешь в офисе?",
    a: `Предупредить руководителя
Сообщить в администрацию / отдел персонала: 
Санкт-Петербург outofoffice@utsrus.com 
Москва mailto:outofoffice-msk@utsrus.com
Регионы - общая группа или рассылка `
  },
  {
    q: "Что делать если забыл пропуск: Санкт-Петербург ?",
    a: `Напишите пожалуйста об этом в HR - kristina.atanova@utsrus.com `
  },
  {
    q: "Что делать если забыл пропуск: Россия ?",
    a: `Подойти на ресепшен, сказать что Вы сотрудник ЕТС (назвать юр.лицо. Или же написать коллеге. 
Главное, чтобы Ваш приход был зафиксирован.`
  }
];

const Questions = () => <div id='questions' className={styles.firstDay}>

  <div className={`container `}>
    <div className={styles.title__container}>
      <Title align='left' >Часто задоваемые вопросы </Title>
    </div>



    <Accordion faqList={faqList}></Accordion>

  </div>
</div >
export default Questions;