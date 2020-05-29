import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { TextField } from '@material-ui/core'
import { Redirect } from 'react-router-dom'

import './RestorePassword.css'

const RestorePassword = (props) => {
  const {
    isLogged,
    requestRestorePassword,
  } = props;

  const [email, setEmail]                   = useState('');
  const [isEmailValid, setIsEmailValid]     = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const shouldEmailBeRewritten = !isEmailValid && !isEmailFocused && !!email;

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

  const handleSubmitButtonClick = () => {

    requestRestorePassword(email)
  }

  return (
    <Container className='b-restore-password'>
      <h4 className='b-restore-password__title'>
        Восстановление пароля
      </h4>
      <div className='b-restore-password__help-text'>
        Введите почту, указанную при регистрации.
        На нее придет ссылка для сброса пароля.
      </div>
      <form className='b-restore-password__form'>
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
        <button
          type='submit'
          className='b-button b-button--primary b-restore-password__submit'
          onClick={handleSubmitButtonClick}
          disabled={!(!shouldEmailBeRewritten && !!email)}
        >
          Сбросить
        </button>
      </form>
    </Container>
  )
}

export default RestorePassword

export const onAuthPageOpen = () => {
  document.body.classList.add('auth-page')
}

export const onAuthPageClose = () => {
  document.body.classList.remove('auth-page')
}
