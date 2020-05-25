import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import NavigationBar from './components/navigation-bar/NavigationBar'
import HomeScreen from './components/home-screen/HomeScreen'
import SignIn from './components/auth/sign-in/SignInContainer'
import SignUp from './components/auth/sign-up/SignUpContainer'
import history from './url/history'

import './App.css'
import './styles/variables.css'
import './styles/common.css'

const App = () => {
  return (
    <Router history={history}>
      <div className='b-app'>
        <NavigationBar />
        <Switch>
          <Route exact path='/'>
            <HomeScreen />
          </Route>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
