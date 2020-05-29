import getMatchedDeviceType from '../../utils/responsive/getMatchedDeviceType'

const initialState = {
  deviceType: getMatchedDeviceType(window.innerWidth),
}

const AuthReducer = (state = initialState, action) => {
  if (action.type === 'RESIZE') {

    return {
      ...state,
      deviceType: action.payload.matchDeviceMedia,
    }

  } else {
    return state
  }
}

export default AuthReducer
