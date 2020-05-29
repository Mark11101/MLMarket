import { connect } from 'react-redux'

import NavigationBar from './NavigationBar'
import { logOut } from '../../store/actions/Auth'

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationBar)
