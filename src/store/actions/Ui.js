import getMatchedDeviceType from '../../utils/responsive/getMatchedDeviceType'

export function resize(width) {
  
  return {
    type: 'RESIZE',
    payload: {
      matchDeviceMedia: getMatchedDeviceType(width),
    },
  }
}
