import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import {
  Content,
  Text,
} from 'native-base'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

const DumbComponent = props => (
  <Content contentContainerStyle={styles.section}>
    <Text style={styles.title}>
      {props.title}
    </Text>
    <Text style={styles.instructions}>
      To get started, edit App.js!
    </Text>
    <Text style={styles.instructions}>
      {instructions}
    </Text>
  </Content>
)

DumbComponent.propTypes = {
  title: PropTypes.string,
}

DumbComponent.defaultProps = {
  title: '',
}

export default DumbComponent
