const initialState = {
  isLogged: false
}

const OfferReducer = (state = initialState, action) => {
  if (action.type === 'SIGN_IN_SUCCESS') {

    return {
      ...state,
      isLogged: true,
    }

  } else {
    return state
  }
}

export default OfferReducer
