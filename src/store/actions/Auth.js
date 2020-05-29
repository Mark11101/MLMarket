export const signInSuccess = () => {
  
  return (dispatch) => {
    dispatch({ 
      type: 'SIGN_IN_SUCCESS'
    })
  }
}

export const logOut = () => {
  
  return (dispatch) => {
    dispatch({ 
      type: 'LOG_OUT'
    })
  }
}

export const requestSignUp = (person) => {

  return (dispatch) => {
    dispatch({
      type: 'REQUEST_SIGN_UP',
      person,
    })
  }
}

export const requestSignIn = (person) => {

  return (dispatch) => {
    dispatch({
      type: 'REQUEST_SIGN_IN',
      person,
    })
  }
}

export const requestRestorePassword = (email) => {

  return (dispatch) => {
    dispatch({
      type: 'REQUEST_RESTORE_PASSWORD',
      email,
    })
  }
}
