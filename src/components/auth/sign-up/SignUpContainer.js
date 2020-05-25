import { connect } from 'react-redux'

import SignUp from './SignUp'

const mapStateToProps = (state) => {
  return {
    isLogged: state.signIn.isLogged,
  }
}

const mapDispatchToProps = () => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp)
