import styles from './First90Days.module.css';
import Title from '../title/Title';



const First90Days = () => <div className={styles.first90Days}>

  <div className={`container `}>
    <div className={styles.title__container}>
      <Title
        align='center'
        color='white'
        colorLine='yellow'>
        Первые 90 дней работы в компании:
      </Title>
    </div>
    <div className={styles.first90days__item}>
      <span> Устный экзамен по продуктам</span>
    </div>
    <div className={styles.first90days__item}>
      <span> Встреча: </span>подводим промежуточные итоги (1,5 месяца работы)
      <div className={styles.first90days__caption} >На этой встрече обсуждается всё, что важно для Вас, нового сотрудника, что действительно волнует</div>
    </div>
    <div className={styles.first90days__item}>
      <span>Как подготовиться:  </span>
      <div className={styles.first90days__caption} >
        <ol className={styles.first90days__list} >
          <li>Сверяемся с задачами на испытательный срок </li>
          <li>Необходимо подготовить краткий отчет о проделанной работе </li>
          <li>Подумайте:
            <ul className={styles.first90days__sublist}>
              <li>Есть ли что-нибудь пока непонятное в работе, команде или может быть в компании в целом? Что необходимо разъяснить?</li>
              <li>Как считаете, Вы нашли общий язык с командой ?</li>
              <li>Что из задач не получается выполнить и почему? </li>
              <li>Есть ли у Вас все необходимое для работы?</li>
              <li>Есть ли все необходимое для изучения и понимание ассортимента ?</li>
            </ul>
          </li>
        </ol>
      </div>
      <div className={styles.first90days__item}>
        <span>  Регулярно запрашивайте обратную связь по Вашей работе, инициируйте встречи с руководителями </span>
        <div className={styles.first90days__caption} >      *частота определяется совместно</div>
      </div>
      <div className={styles.first90days__item}>
        <span>   3 месяца, полет нормальный ?! Подводим итоги первых 90 дней на встрече </span>
        <div className={styles.first90days__caption} >
          <ol className={styles.first90days__list} >
            <li>Поделитесь впечатлениями как прошел первый период Вашей адаптации, какие  возникли сложности? </li>
            <li>На сколько были понятны задачи и обязанности</li>
            <li>Какие ожидания пока не оправдались </li>
            <li>Какие цели на следующие 3 месяца</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</div>
export default First90Days;