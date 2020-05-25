import { connect } from 'react-redux'

import SignIn from './SignIn'

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
)(SignIn)
