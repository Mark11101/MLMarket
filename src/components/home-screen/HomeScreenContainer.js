import { connect } from 'react-redux'

import HomeScreen from './HomeScreen'

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
)(HomeScreen)
