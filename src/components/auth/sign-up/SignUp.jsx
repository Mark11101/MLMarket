import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { TextField, FormControl, MenuItem, Select } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom'

import PersonTypes from '../../../constants/PersonTypes'

import './SignUp.css'

const SignUp = (props) => {
  const {
    isLogged,
    requestSignUp,
  } = props;

  const entity     = PersonTypes.ENTITY;
  const individual = PersonTypes.INDIVIDUAL;

  const [email, setEmail]                   = useState('');
  const [isEmailValid, setIsEmailValid]     = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [password, setPassword]                   = useState('');
  const [isPasswordValid, setIsPasswordValid]     = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [confirmedPassword, setConfirmedPassword]                   = useState('');
  const [isPasswordConfirmed, setIsPasswordConfirmed]               = useState(false);
  const [isConfirmedPasswordFocused, setIsConfirmedPasswordFocused] = useState(false);

  const [name, setName]                   = useState('');
  const [isNameValid, setIsNameValid]     = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);

  const [number, setNumber]                   = useState('');
  const [isNumberValid, setIsNumberValid]     = useState(false);
  const [isNumberFocused, setIsNumberFocused] = useState(false);

  const shouldEmailBeRewritten             = !isEmailValid && !isEmailFocused && !!email;
  const shouldPasswordBeRewritten          = !isPasswordValid && !isPasswordFocused && !!password;
  const shouldConfirmedPasswordBeRewritten = !isPasswordConfirmed && !isConfirmedPasswordFocused && !!confirmedPassword;
  const shouldNameBeRewritten              = !isNameValid && !isNameFocused && !!name;
  const shouldNumberBeRewritten            = !isNumberValid && !isNumberFocused && !!number; 

  const [personType, setPersonType]   = useState(individual);
  const [companyName, setCompanyName] = useState('');

  const isAllFieldsValid = !shouldEmailBeRewritten && !shouldPasswordBeRewritten &&
    !shouldConfirmedPasswordBeRewritten && !shouldNameBeRewritten &&
    !shouldNumberBeRewritten && !!companyName 

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

  const handleConfirmedPasswordChange = (event) => {
    const confirmedPassword = String(event.target.value)

    setConfirmedPassword(confirmedPassword)
    setIsPasswordConfirmed(confirmedPassword === password)
  }

  const handleConfirmedPasswordFocus = () => {
    
    setIsConfirmedPasswordFocused(true)
  }

  const handleConfirmedPasswordBlur = () => {

    setIsConfirmedPasswordFocused(false)
  }

  const handleNameChange = (event) => {
    const name = event.target.value;
    const nameLength = name.replace(/ /g, "").length;

    setIsNameValid(nameLength >= 2 && nameLength <= 200)
    setName(name)
  }

  const handleNameFocus = () => {
    
    setIsNameFocused(true)
  }

  const handleNameBlur = () => {

    setIsNameFocused(false)
  }

  const handleNumberChange = (event) => {
    const number = String(event.target.value);
    const numberRegEx = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;

    setIsNumberValid(numberRegEx.test(number))
    setNumber(number)
  }

  const handleNumberFocus = () => {
    
    setIsNumberFocused(true)
  }

  const handleNumberBlur = () => {

    setIsNumberFocused(false)
  }

  const handlePersonTypeChange = (event) => {

    setPersonType(event.target.value)
  }

  const handleCompanyNameChange = (event) => {

    setCompanyName(event.target.value)
  }

  const handleSubmitButtonClick = () => {
    const personData = {
      email,
      password,
      confirmedPassword,
      name,
      number,
      personType,
      companyName,
    }

    requestSignUp(personData)
  }

  return (
    <Container className='b-sign-up'>
      <div className='b-sign-up__header'>
        <h4 className='b-sign-up__title'>
          Регистрация
        </h4>
        <Link
          to='/sign-in'
          className='b-sign-up__sign-in'
        >
          Уже зарегистрированы?
        </Link>
      </div>
      <form className='b-sign-up__form'>
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
          type='password'
          label='Пароль' 
          variant='outlined'
          onChange={handlePasswordChange}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          error={shouldPasswordBeRewritten}
          helperText={shouldPasswordBeRewritten && 'Минимальная длина пароля: 6 символов'}
          required
        />
        <TextField 
          id='confirm-password' 
          type='password'
          label='Подтвердите пароль' 
          variant='outlined'
          onChange={handleConfirmedPasswordChange}
          onFocus={handleConfirmedPasswordFocus}
          onBlur={handleConfirmedPasswordBlur}
          error={shouldConfirmedPasswordBeRewritten}
          helperText={shouldConfirmedPasswordBeRewritten && 'Пароли не совпадают'}
          required
        />
        <TextField 
          id='name' 
          label='ФИО полностью' 
          variant='outlined'
          onChange={handleNameChange}
          onFocus={handleNameFocus}
          onBlur={handleNameBlur}
          error={shouldNameBeRewritten}
          helperText={shouldNameBeRewritten && 'ФИО должно содержать от 2 до 200 символов'}
          required
        />
        <TextField 
          id='number' 
          label='Номер телефона' 
          variant='outlined'
          onChange={handleNumberChange}
          onFocus={handleNumberFocus}
          onBlur={handleNumberBlur}
          error={shouldNumberBeRewritten}
          helperText={shouldNumberBeRewritten && 'Некорректный номер телефона'}
          required
        />
        <FormControl variant='outlined'>
          <Select
            id='demo-simple-select-outlined'
            value={personType}
            onChange={handlePersonTypeChange}
          >
            <MenuItem value={individual}>
              Физическое лицо
            </MenuItem>
            <MenuItem value={entity}>
              Юридическое лицо
            </MenuItem>
          </Select>
        </FormControl>
        <TextField 
          id='company-name' 
          label='Название компании' 
          variant='outlined'
          onChange={handleCompanyNameChange}
          required
        />
        <button
          type='submit'
          className='b-button b-button--primary b-sign-up__submit'
          onClick={handleSubmitButtonClick}
          disabled={!isAllFieldsValid}
        >
          Зарегистрироваться
        </button>
      </form>
    </Container>
  )
}

export default SignUp

export const onAuthPageOpen = () => {
  document.body.classList.add('auth-page')
}

export const onAuthPageClose = () => {
  document.body.classList.remove('auth-page')
}
