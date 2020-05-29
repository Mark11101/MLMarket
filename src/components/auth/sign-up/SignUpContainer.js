import { connect } from 'react-redux'

import SignUp from './SignUp'
import { requestSignUp } from '../../../store/actions/Auth'

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
  }
}

const mapDispatchToProps = () => {
  return {
    requestSignUp: (person) => dispatchEvent(requestSignUp(person))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp)
