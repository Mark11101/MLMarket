import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { TextField } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom'

import './SignIn.css'

const SignIn = (props) => {
  const {
    isLogged,
    requestSignIn,
  } = props;

  const [email, setEmail]                   = useState('');
  const [isEmailValid, setIsEmailValid]     = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [password, setPassword]                   = useState('');
  const [isPasswordValid, setIsPasswordValid]     = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const shouldEmailBeRewritten    = !isEmailValid && !isEmailFocused && !!email;
  const shouldPasswordBeRewritten = !isPasswordValid && !isPasswordFocused && !!password;

  const isAllFieldsValid = !shouldEmailBeRewritten && !shouldPasswordBeRewritten && 
    !!email && !!password;

  React.useEffect(() => {
    onAuthPageOpen()

    return onAuthPageClose
  }, []) 
  
  if (isLogged) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    )
  }

  const handleEmailChange = (event) => {
    const email = event.target.value;
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const lowercaseEmail = String(email).toLowerCase();

    setIsEmailValid(emailRegEx.test(lowercaseEmail))
    setEmail(email)
  }

  const handleEmailFocus = () => {
    
    setIsEmailFocused(true)
  }

  const handleEmailBlur = () => {

    setIsEmailFocused(false)
  }

  const handlePasswordChange = (event) => {
    const password = String(event.target.value);

    setPassword(password)
    setIsPasswordValid(password.length >= 6)
  }

  const handlePasswordFocus = () => {
    
    setIsPasswordFocused(true)
  }

  const handlePasswordBlur = () => {

    setIsPasswordFocused(false)
  }

  const handleSubmitButtonClick = () => {
    const personData = {
      email,
      password,
    }

    requestSignIn(personData)
  }

  return (
    <Container className='b-sign-in col-4'>
      <div className='b-sign-in__header'>
        <h4 className='b-sign-in__title'>
          Вход
        </h4>
        <Link 
          to='/sign-up'
          className='b-sign-in__sign-up'
        >
          Регистрация
        </Link>
      </div>
      <form className='b-sign-in__form'>
        <TextField 
          id='email'
          label='Email' 
          variant='outlined'          
          onChange={handleEmailChange}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          error={shouldEmailBeRewritten}
          helperText={shouldEmailBeRewritten && 'Введен неправильный почтовый адрес'}
          required
        />
        <TextField 
          id='password' 
          label='Пароль' 
          variant='outlined'
          onChange={handlePasswordChange}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          error={shouldPasswordBeRewritten}
          helperText={shouldPasswordBeRewritten && 'Минимальная длина пароля: 6 символов'}
          required
        />
        <Link 
          to='/restore-password'
          className='b-sign-in__forgot-password'
        >
          Забыли пароль?
        </Link>
        <button
          type='submit'
          className='b-button b-button--primary b-sign-in__submit'
          onClick={handleSubmitButtonClick}
          disabled={!isAllFieldsValid}
        >
          Войти
        </button>
      </form>
    </Container>
  )
}

export default SignIn

export const onAuthPageOpen = () => {
  document.body.classList.add('auth-page')
}

export const onAuthPageClose = () => {
  document.body.classList.remove('auth-page')
}
