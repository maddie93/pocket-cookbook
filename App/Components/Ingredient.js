import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/IngredientStyle'
import PropTypes from 'prop-types'


export default class Ingredient extends Component {
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

  static propTypes = {
    name: PropTypes.string,
    onPress: PropTypes.func
  }

  render () {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.text}> + {this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}
