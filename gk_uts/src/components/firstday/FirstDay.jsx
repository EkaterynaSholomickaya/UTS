import styles from './FirstDay.module.css';
import Title from '../title/Title';
import { Accordion } from '../accordion/Accordion';


const faqList = [
  {
    q: (<div className={styles.list__title}>
      1. Оформление трудоустройства
    </div>),
    a:
      (<div className={styles.list__text}>
        Вас встретит коллега, его контакты указаны в Welcome-письме, и проведет на оформление:
        <ul>
          <li>Вас ознакомят с Положениями и локально-нормативными актами</li>
          <li>Далее пройдет подписание трудового договора и NDA</li>
          <li>Инструктаж по технике безопасности</li>
        </ul>
      </div>)
  },
  {
    q: (<div className={styles.list__title}>
      2. Знакомство с офисом
    </div>),
    a:
      (<div className={styles.list__text}>Проведут экскурсию по офису и представят коллегам</div>)
  },
  {
    q: (<div className={styles.list__title}>
      3. Знакомство с рабочим софтом, корпоративным порталом и основными каналами взаимодействия
    </div>),
    a:
      (<div className={styles.list__text}>
        Познакомят с:
        <ul>
          <li>Intranet и его возможностями  </li>
          <li>Helpdesk</li>
          <li>1С</li>
          <li>Диск F</li>
        </ul>
      </div>)
  },
  {
    q: (<div className={styles.list__title}>
      4. Самостоятельное изучение материалов
    </div>),
    a:
      (<div className={styles.list__text}>
        В разделе «Школа ЕТС» в intranet мы подготовили информацию, которую ВАЖНО узнать в первый рабочий день:
        <ul>
          <li>Корпоративный кодекс ЕТС</li>
          <li>Политика о конфиденциальности ЕТС</li>
          <li>Правила Внутреннего трудового распорядка</li>
          <li>Ознакомиться с должностной инструкцией</li>
        </ul>
      </div>)
  },
  {
    q: (<div className={styles.list__title}>
      5. Встреча с руководителем
    </div>),
    a:
      (<div className={styles.list__text}>
        Запланирована обязательная встреча для ввода в должность и обсуждения планов на первые дни работы
      </div>)
  },

];

const FirstDay = () => <div id='work' className={styles.firstDay}>




  <div className={`container `}>

    <div className={styles.title__container}>
      <Title align="center" color="white" colorLine="yellow">
        Как пройдет первый день
      </Title>
    </div>
    <div className={styles.accordion__container}>
      <Accordion faqList={faqList} blue={true} />
    </div>


    {/* <div className={styles.firstDay__container}>
      <div className={styles.list}>
        <div className={styles.list__title}>
          <span>01</span>
          Оформление трудоустройства
        </div>
        <div className={styles.list__text}>
          Вас встретит коллега, его контакты указаны в Welcome-письме, и проведет на оформление:
          <ul>
            <li>Вас ознакомят с Положениями и локально-нормативными актами</li>
            <li>Далее пройдет подписание трудового договора и NDA</li>
            <li>Инструктаж по технике безопасности</li>
          </ul>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.list__title}>
          <span>02</span>
          Знакомство с офисом
        </div>
        <div className={styles.list__text}>Проведут экскурсию по офису и представят коллегам</div>
      </div>
      <div className={styles.list}>
        <div className={styles.list__title}>
          <span>03</span>
          Знакомство с рабочим софтом, корпоративным порталом и основными каналами взаимодействия
        </div>
        <div className={styles.list__text}>
          Познакомят с:
          <ul>
            <li>Intranet и его возможностями  </li>
            <li>Helpdesk</li>
            <li>1С</li>
            <li>Диск F</li>
          </ul>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.list__title}>
          <span>04</span>
          Самостоятельное изучение материалов
        </div>
        <div className={styles.list__text}>
          В разделе «Школа ЕТС» в intranet мы подготовили информацию, которую ВАЖНО узнать в первый рабочий день:

          <ul>
            <li>Корпоративный кодекс ЕТС</li>
            <li>Политика о конфиденциальности ЕТС</li>
            <li>Правила Внутреннего трудового распорядка</li>
            <li>Ознакомиться с должностной инструкцией</li>
          </ul>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.list__title}>
          <span>05</span>
          Встреча с руководителем
        </div>
        <div className={styles.list__text}>
          Запланирована обязательная встреча для ввода в должность и обсуждения планов на первые дни работы
        </div>
      </div>

    </div> */}


    <h2 className={styles.firstDay__title}>
      Получить / согласовать
    </h2>
    <div className={styles.firstDay__row}>

      <div className={styles.firstDay__item}>
        В первый рабочий день
        <ul>
          <li>Пропуск </li>
          <li>Технику</li>
          <li>Корпоративный номер телефона</li>
          <li>Пароль от wi-fi</li>
          <li>Почту</li>
          <li>Доступ в intranet (наш корпоративный портал) и Help Desk</li>
          <li>Заказать канцелярию у офис-менеджера</li>
        </ul>
      </div>
      <div className={styles.firstDay__item}>
        В первую рабочую неделю

        <ul>
          <li>Согласовать даты и создать задачу на командировку для знакомства с коллегами в головном офисе </li>
          <li>Подключить корпоративное такси</li>
          <li>Уточнить как забронировать корпоративный транспорт можно у офис-менеджера / директора филиала </li>
        </ul>
      </div>

    </div>

  </div>
</div>
export default FirstDay;