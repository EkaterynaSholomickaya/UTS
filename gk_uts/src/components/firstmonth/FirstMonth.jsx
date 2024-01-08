import styles from './FirstMonth.module.css';
import Title from '../title/Title';
import { Accordion } from '../accordion/Accordion';


const faqList = [
  {
    q: "Начать изучение ассортимента:",
    a:
      (<ul style={{ listStyle: "inside", marginLeft: "15px" }} >
        <li>Встретиться с Ведущими менеджерами для ознакомления с продуктами</li>
        <li>Весь ассортимент, с презентациями, находится на диске F</li>
        <li>Посетить лабораторию, пообщаться с технологом для более глубокого понимания продуктов, задать вопросы</li>
      </ul>)
  },
  {
    q: "Ознакомиться с системой планирования и отчётности.",
    a:
      (<div style={{ fontSize: "24px", fontWeight: "300" }}>
        <p>Для работы с 1С в intranet выделен отдельный блок «1С»</p>
        <p>Для работы с программами у нас также разработан курс, там Вы найдете материалы по темам:</p>
        <ul style={{ listStyle: "inside", marginLeft: "15px" }}>
          <li>Настройка почты на iPhone</li>
          <li>Инструкция по заполнению заявки на покупку авиа и жд билетов в HelpDesk</li>
          <li>Курс Excel Базовый Работа с системой СПАРК Основы работы в 1С КА2</li>
          <li>Базовый курс по работе в 1С КА2 </li>
          <li>И другие</li>
        </ul>
      </div>)
  }
];

const FirstMonth = () => <div className={styles.firstDay}>

  <div className={`container `}>
    <div className={styles.title__container}>
      <Title align='center'>План для первого месяца работы в компании: </Title>
    </div>

    <p className={styles.firstDay__text}>
      Если вы приняты на работу в одном из наших филиалов: запланирована командировка в головной офис для знакомства с командой
    </p>
    <p className={styles.firstDay__text}>
      Познакомиться, узнать коллег, в том числе из других отделов, с которыми будет более плотное взаимодействие.
    </p>
    <p className={styles.firstDay__text}>
      Посмотреть вводный тренинг для новых сотрудников ГК ЕТС
      <span>*  Раз в квартал мы проводим его в очном и онлайн-режиме, мы обязательно пришлем приглашение!</span>
    </p>
    <div className={styles.block}>

      <Accordion faqList={faqList}></Accordion>

    </div>
    <div className={styles.block}></div>

    <p className={styles.firstDay__text}>
      Через 2 недели состоится встреча с руководителем  и HR для обсуждения целей и задач на испытательный срок
      <span>* Важно уточнить у руководителя приоритеты по целям, задать все интересующие вопросы. Если в процессе работы Вы понимаете, что не все цели выполнимы обязательно инициируйте встречу самостоятельно.</span>
    </p>

    <p className={styles.firstDay__text}>
      Ознакомиться с системой планирования и отчётности
    </p>
    <p className={styles.firstDay__text}>
      Подробно вести отчетность о проделанной работе
    </p>

  </div>
</div >
export default FirstMonth;