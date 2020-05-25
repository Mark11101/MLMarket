import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <Navbar 
      bg='dark' 
      variant='dark' 
      expand='lg'
      className='b-nav'
    >
      <Navbar.Brand href='/'>
        Home
      </Navbar.Brand>
    </Navbar>
  )
}

export default NavigationBar
