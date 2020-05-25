import React from 'react'
import Container from 'react-bootstrap/Container'
import { Redirect } from 'react-router-dom'

//import './HomeScreen.css'

const HomeScreen = (props) => {
  const {
    isLogged,
  } = props;

  if (!isLogged) {
    return (
      <Redirect
        to={{
          pathname: '/sign-in',
        }}
      />
    )
  }

  return (
    <Container>
      <div className='b-home-screen'>
        HomePage
      </div>
    </Container>
  )
}

export default HomeScreen
