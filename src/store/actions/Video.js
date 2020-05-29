export const requestVideoLoading = (config) => {
  
  return (dispatch) => {
    dispatch({ 
      type: 'REQUEST_VIDEO_LOADING',
      config,
    })
  }
}
