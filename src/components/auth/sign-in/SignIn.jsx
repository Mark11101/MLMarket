import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { TextField } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom'

import './SignIn.css'

const SignIn = (props) => {
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
    <Container className='b-sign-in'>
      <Row>
        <Col>
          <div className='b-sign-in__header'>
            <h4 className='b-sign-in__title'>
              Sign In
            </h4>
            <Link 
              to='/sign-up'
              className='b-sign-in__sign-up'
            >
              Register
            </Link>
          </div>
          <form className='b-sign-in__form'>
            <TextField 
              id='email'
              label='Email' 
              variant='outlined'
              className='b-sign-in__email'
            />
            <TextField 
              id='password' 
              label='Password' 
              variant='outlined'
              className='b-sign-in__password'
            />
            <button
              type='submit'
              className='b-button b-sign-in__submit'
            >
              Sign In
            </button>

          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default SignIn
