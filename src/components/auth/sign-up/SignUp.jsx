import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { TextField } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom'

import './SignUp.css'

const SignUp = (props) => {
  const {
    isLogged
  } = props;

  if (isLogged) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    )
  }

  return (
    <Container className='b-sign-up'>
      <Row>
        <Col>
          <div className='b-sign-up__header'>
            <h4 className='b-sign-up__title'>
              Sign Up
            </h4>
            <Link
              to='/sign-in'
              className='b-sign-up__sign-in'
            >
              Log In
            </Link>
          </div>
          <form className='b-sign-up__form'>
            <TextField 
              id='email'
              label='Email' 
              variant='outlined'
              className='b-sign-up__email'
            />
            <TextField 
              id='password' 
              label='Password' 
              variant='outlined'
              className='b-sign-up__password'
            />
            <TextField 
              id='confirmPassword' 
              label='Confirm password' 
              variant='outlined'
              className='b-sign-up__confirm-password'
            />
            <button
              type='submit'
              className='b-button b-sign-up__submit'
            >
              Sign up
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUp
