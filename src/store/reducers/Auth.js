const initialState = {
  isLogged: false
}

const AuthReducer = (state = initialState, action) => {
  if (action.type === 'SIGN_IN_SUCCESS') {

    return {
      ...state,
      isLogged: true,
    }

  } else if (action.type === 'LOG_OUT') {

    return {
      ...state,
      isLogged: false,
    }
  } else {
    return state
  }
}

export default AuthReducer
