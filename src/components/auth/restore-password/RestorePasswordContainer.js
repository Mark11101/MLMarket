import { connect } from 'react-redux'

import RestorePassword from './RestorePassword'
import { requestRestorePassword } from '../../../store/actions/Auth'

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
  }
}

const mapDispatchToProps = () => {
  return {
    requestRestorePassword: (email) => dispatchEvent(requestRestorePassword(email))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestorePassword)
