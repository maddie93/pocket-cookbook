import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/RecipeStyle'

export default class Recipe extends Component {
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
    description: PropTypes.string
  }

  render () {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.name}>{this.props.name}</Text>
        <Text style={styles.description}>{this.props.description}</Text>
      </TouchableOpacity>
    )
  }
}
