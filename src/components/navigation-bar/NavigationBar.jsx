import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { User } from 'react-feather'

import useDevice from '../../hooks/use-device/useDevice'
import DeviceTypes from '../../constants/DeviceTypes'
import Divider from '../subcomponents/divider/Divider'

import './NavigationBar.css'

const NavigationBar = (props) => {
  const {
    isLogged,
    logOut,
  } = props;

  const deviceType = useDevice();
  
  return (
    <Navbar 
      expand='lg'
      variant='dark'
      className='b-nav'
    >
      <Container>
        <Navbar.Brand href='/' className='b-nav__brand'>
          ML Market
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Продукты</Nav.Link>
            <Nav.Link href="#">Возможности</Nav.Link>
            <Nav.Link href="#">Тарифы</Nav.Link>
            <Nav.Link href="#">FAQ</Nav.Link>
            <Nav.Link href="#">Контакты</Nav.Link>
            <Nav.Link href="#">Мое облако</Nav.Link>
            {
              deviceType !== DeviceTypes.DESKTOP
              ?
                <>
                  {
                    isLogged
                    ?
                      <>
                        <Divider />
                        <Nav.Link 
                          href="#" 
                          onClick={() => logOut()}
                        >
                          Выйти
                        </Nav.Link>
                      </>
                    :
                      <>
                        <Divider />
                        <Nav.Link href="/sign-in">Войти</Nav.Link>
                        <Nav.Link href="/sign-up">Зарегистрироваться</Nav.Link>
                      </>

                  }
                </>
              :
                <NavDropdown 
                  id="basic-nav-dropdown"
                  title={ <User /> } 
                >
                  {
                    isLogged
                    ?
                      <>
                        <NavDropdown.Item href="#">Личный кабинет</NavDropdown.Item>
                        <NavDropdown.Item 
                          href="#"
                          onClick={() => logOut()}
                        >
                          Выйти
                        </NavDropdown.Item>
                      </>
                    :
                      <>
                        <NavDropdown.Item href="/sign-in">Войти</NavDropdown.Item>
                        <NavDropdown.Item href="/sign-up">Зарегистрироваться</NavDropdown.Item>
                      </>
                  }
                </NavDropdown>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
