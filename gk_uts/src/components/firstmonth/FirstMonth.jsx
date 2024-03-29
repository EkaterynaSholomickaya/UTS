import styles from './FirstMonth.module.css';


const FirstMonth = () => <div className={styles.firstMonth}>
  <ul className={styles.firstMonth__list}>
<li>Необходимо ознакомиться с основными процессами, системой планирования и отчётности. Для работы в 1С выделен отдельный блок обучения в intranet. </li>
<li>Начать изучение своей группы продуктов лучше со знакомства с ведущими менеджерами. Вам организуют встречу с технологом, он покажет лабораторию, расскажет то, что необходимо знать о продуктах, ответит на вопросы.</li>
<li>В процессе работы важно уточнять приоритеты по целям/задачам. Если понимаете, что не все цели выполнимы, обязательно инициируйте встречу с руководителем. 
 Фиксируйте все взаимодействия с клиентами  в CRM.
  </li>
<li>На конец первого месяца запланирован устный экзамен по продуктам.</li>
<li>Адаптационная встреча: подводим промежуточные итоги и обсуждаем всё, что  важно. 

  <div  className={styles.firstMonth__secondlist_caption}>Перед встречей, пожалуйста, подумайте: 
  <ol  className={styles.firstMonth__secondlist}>
    <li>Что осталось непонятно в работе, регламентах, организационной среде или может быть в компании в целом?  </li>
    <li>Как считаете, вы нашли общий язык с командой?</li>
    <li>Как вы оцениваете ваше взаимодействие в руководителем / ведущими менеджерами?  </li>
    <li>Есть ли у вас все необходимое для работы?</li>
  </ol> 
  </div>
</li>
</ul>

<div  className={styles.firstMonth__questions} >Организационные вопросы: </div>
<p className={styles.firstMonth__questions_text}>

  <div className={styles.firstMonth__p}>
    Как настроить рабочую почту на своем телефоне, подключить корпоративное такси, создать задачу в IT или 1С, найти инструкции и обучающие ролики, вы узнаете из соответствующего раздела Intranet.
  </div>
  <div className={styles.firstMonth__p}>
    <span>Если вы работаете не в Санкт-Петербурге</span> руководитель запланирует вам командировку в Головной офис для обучения и знакомства с командой департамента. 
  </div>
  <div className={styles.firstMonth__p}>
    Для помощи в согласовании даты и создания задачи на командировку обратитесь к директору филиала.
  </div>
  <div className={styles.firstMonth__p}>
    Если не находите ответа - смело спрашивайте в <a className={styles.firstMonth__link} href="#form">отделе персонала!</a> 
  </div>

</p>
</div >
export default FirstMonth;