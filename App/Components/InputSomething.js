import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/InputSomethingStyle'

export default class InputSomething extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render () {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    )
  }
}
