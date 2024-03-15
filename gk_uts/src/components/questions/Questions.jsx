import styles from './Questions.module.css';
import Title from '../title/Title';
import { Accordion } from '../accordion/Accordion';


const faqList = [
  {
    q: <div style={{ padding:"20px" }}>Как принято одеваться в компании?</div>,
    a:
      <div style={{ fontSize: "24px", fontWeight: "300", padding:"0px 20px 20px" }}>
        <p>Дресс-код в нашей компании соответствует стилю «Business casual» или  «повседневный деловой стиль одежды».</p>
        <p><span style={{ fontWeight: "700" }}> Для мужчин </span>предпочтителен деловой костюм. Если нет переговоров, то возможны джинсы, джемпера, пуловеры. Рубашка предпочтительно одноцветная. Обязателен ремень. </p>
        <p><span style={{ fontWeight: "700" }}> Для женщин </span>деловой костюм, жакет, жилет, юбка, брюки или платье. Сочетание блуза - юбка или блуза брюки. Умеренный макияж и парфюм.</p>
      </div>
  },
//   {
//     q: "Что делать если отсутствуешь в офисе?",
//     a: <ol style={{ listStyle: "decimal", marginLeft: "30px" }}>
//       <li>Предупредить руководителя</li>
//       <li>Сообщить в администрацию / отдел персонала:
//         <ul style={{ listStyle: "disc", marginLeft: "30px" }}>
//           <li> <span>Санкт-Петербург</span> outofoffice@utsrus.com </li>
//           <li><span>Москва</span> mailto:outofoffice-msk@utsrus.com</li>
//           <li><span>Регионы</span> - общая группа или рассылка</li>
//         </ul></li>
//     </ol>
//   },
//   {
//     q: "Что делать если забыл пропуск: Санкт-Петербург ?",
//     a: <div style={{ fontSize: "24px", fontWeight: "300" }}>
//       <p>Напишите пожалуйста об этом в HR - <span> kristina.atanova@utsrus.com</span></p>
//     </div>
//   },
//   {
//     q: "Что делать если забыл пропуск: Россия ?",
//     a: `Подойти на ресепшен, сказать что Вы сотрудник ЕТС (назвать юр.лицо. Или же написать коллеге. 
// Главное, чтобы Ваш приход был зафиксирован.`
//   },
];

const Questions = () => <div id='questions' className={styles.questions}>

  <div className={`container ${styles.questions__container}`}>
    <div className={styles.title__container}>
      <Title align='left' >Вопросы </Title>
    </div>

    <Accordion faqList={faqList}></Accordion>

  </div>
</div >
export default Questions;