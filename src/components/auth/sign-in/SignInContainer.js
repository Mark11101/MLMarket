import { connect } from 'react-redux'

import SignIn from './SignIn'
import { requestSignIn } from '../../../store/actions/Auth'

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
  }
}

const mapDispatchToProps = () => {
  return {
    requestSignIn: (person) => dispatchEvent(requestSignIn(person))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn)
