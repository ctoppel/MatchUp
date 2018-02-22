import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container } from 'native-base'
import PropTypes from 'prop-types'

// Components
import DumbComponent from '../components/DumbComponent'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export default class HomeScreen extends Component {
  componentDidMount() {
    console.log('Mounted')
  }

  render() {
    return (
      <Container style={styles.container}>
        <DumbComponent title="Welcome to React Native" />
      </Container>
    )
  }
}

HomeScreen.propTypes = {
  someProp: PropTypes.string,
}

HomeScreen.defaultProps = {
  someProp: '',
}
