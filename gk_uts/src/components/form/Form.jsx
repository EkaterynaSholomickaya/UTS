import styles from './Form.module.css';
import {ReactComponent as FormIcon} from './../../assets/icons/form.svg'
import { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";


const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [messageDirty, setMessageDirty] = useState(false);

  const [nameError, setNameError] = useState('Имя не может быть пустым');
  const [phoneError, setPhoneError] = useState('Заполните телефон');
  const [messageError, setMessageError] = useState('Заполните сообщение');
  const [emailError, setEmailError] = useState('Заполните емейл');

  const [formValid, setFormValid] = useState(false)

  useEffect(()=>{
    if (nameError||phoneError||messageError||emailError){
      setFormValid(false)
    }
    else {
      setFormValid(true)
    }
  },
  [nameError,phoneError,messageError,emailError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2)
      setNameError('Слишком короткое имя')
    else setNameError('');
  }

  const emailHandler = (e) => {

    setEmail(e.target.valuex)
    const EMAIL_REGEXP =/^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/ ;
    if (!EMAIL_REGEXP.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError('Некорректный емейл');
    } else {
      setEmailError('')
    }
  }

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const PHONE_REGEXP = /^((\+3|8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if (!PHONE_REGEXP.test(String(e.target.value).toLocaleLowerCase())) {
      setPhoneError('Некорректный телефон');
    } else {
      setPhoneError('')
    }
  }

  const messageHandler = (e) => {
    setMessage(e.target.value);

    if (e.target.value.length < 10){
      setMessageError('Короткое сообщение!')
      if (!e.target.value) {
        setMessageError('Заполните сообщение')
      } }
    else setMessageError('');
  }
  

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name': setNameDirty(true); 
      break;
      case 'phone': setPhoneDirty(true);
      break;
      case 'email': setEmailDirty(true);
      break;
      case 'message': setMessageDirty(true);
      break;
        
    }
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_f8y6k8g","template_j9dxjxg", form.current, {
        publicKey: "f5mqGjOTag6kYmBYh",
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setPhone('');
        },
        (error) => {
          alert('Форма не отправлена!')
        },
      );
      e.target.reset();

    }


  return (  
  <div className="container" >
      <div className={styles.content}>
        <div className={styles.left_side}>
        <form  name="form" id='form' onSubmit={sendEmail} ref={form}>
            <div className={styles.input_box}>
              
              <input
                type="text"
                placeholder="Ваше имя"
                name="name"
                id="name"
                onBlur={e=>blurHandler(e)}
                onChange={e => nameHandler(e)}
                value={name}
              />
              {(nameDirty && nameError) && <label for="name" style={{ }}>
                {nameError}</label> }
            </div>

            <div className={styles.input_box}>
              <input
                type="text"
                placeholder="Введите email"
                name="email"
                id="email"
                onBlur={e=>blurHandler(e)}
                onChange={e => emailHandler(e)}
                value={email}
              />
              {(emailDirty && emailError) && <label for="email">{emailError}</label> }
            </div>

            <div className={styles.input_box}>
              <input
                type="text"
                placeholder="Введите телефон"
                name="phone"
                id="phone"
                onChange={e => phoneHandler(e)}
                onBlur={e=>blurHandler(e)}
                value={phone}
              />
              {(phoneDirty && phoneError) && <label for="phone">{phoneError}</label> }
            </div>

            <div className={`${styles.input_box} ${styles.message_box}`}>
              <textarea 
                className={`${styles.textarea}`}
                placeholder="Сообщение" 
                name="message"
                id="message"
                onBlur={e=>blurHandler(e)}
                onChange={e => messageHandler(e)}
                value={message}></textarea>
              {(messageDirty && messageError) && <label for="message" className={styles.labelTextarea} style={{lineHeight:'0px' }}>{messageError}</label> }
            </div>
            <button disabled={!formValid} className={styles.button} type="submit">
              Отправить
            </button>
        </form></div>

        <div className={styles.right_side}>
          <FormIcon className={styles.icon}/>
            <div className={styles.topic_text}>
              Остались вопросы?
            </div>
            <p className={styles.text}>
              Напишите нам и наши специалисты свяжутся с вами         
            </p>        
        </div>
      </div>
    </div>
  )}
  export default Form;