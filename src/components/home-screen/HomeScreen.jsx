import React from 'react'
import Container from 'react-bootstrap/Container'

import HomePageLogo from '../../images/HomepageLogo.jpg'

import './HomeScreen.css'

const HomeScreen = (props) => {
  // const {
  //   isLogged,
  // } = props;

  // if (!isLogged) {
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: '/sign-in',
  //       }}
  //     />
  //   )
  // }

  return (
    <Container className='b-home-screen'>
      <div className='b-home-screen__intro-block'>
        <div className='b-home-screen__intro-text'>
          <h2 className='b-home-screen__intro-text-header'>
            ML-Market - уникальный доступ к 
            интеллектуальной видеоаналитике
          </h2>
          <div className='b-home-screen__intro-text-main'>
            Получи бесплатную возможность пользоваться 
            алгоритмами распознавания прямо сейчас!
          </div>
          <a 
            className='b-button b-button--primary b-home-screen__intro-text-start-btn'
            href='./video-loading'
          >
            Начать
          </a>
        </div>
        <img 
          src={HomePageLogo} 
          alt='' 
          className='b-home-screen__welcome-logo'
        />
      </div>
      <div className='b-home-screen__info-block'>
        <Container>
          <h3 className='b-home-screen__info-block-header'>
            Самый простой и доступный способ подключить 
            видеоаналитику для ваших камер
          </h3>
          <div className='b-home-screen__info-block-main-text'>
            Больше нет никаких проблем и обязательств - 
            Вам нужно просто подключиться к сервису ML-Market, 
            загрузить видео (не более 12 часов) с установленных 
            у вас камер видеонаблюдения и получить требуемый 
            аналитический отчет в удобном формате PDF в личном 
            кабинете через 2 часа!
          </div>
        </Container>
      </div>
    </Container>
  )
}

export default HomeScreen
