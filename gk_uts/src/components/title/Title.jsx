import style from './Title.module.css';



const Title = ({ children, color, align, colorLine }) =>

  <div className={`${style.title}  ${style[align]}`}>

    <h2 className={`${style.title} ${style[color]}`}> {children} </h2>

    <div className={`${style.line} ${style[colorLine]}`} > </div>

  </div>

export default Title;

