import { connect } from 'react-redux'

import VideoLoading from './VideoLoading'
import { requestVideoLoading } from '../../store/actions/Video'

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
  }
}

const mapDispatchToProps = () => {
  return {
    requestVideoLoading: (configuration) => dispatchEvent(requestVideoLoading(configuration))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideoLoading)
