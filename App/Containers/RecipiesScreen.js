import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RecipiesScreenStyle'

class RecipiesScreen extends Component {

  constructor(props){
    super(props);


  }

  // function getFromSafeInfo() {
  //   return fetch('http://mysafeinfo.com/api/data?list=alcoholicbeverages&format=json&abbreviate=false&case=lower')
  //     .then((response) => response.json())
  //     .then((responseJson) => {return responseJson})
  //     .catch((error) => {console.error(error);});
  // }


  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>RecipiesScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipiesScreen)
