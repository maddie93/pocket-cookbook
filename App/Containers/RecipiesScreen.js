import React, { Component } from 'react'
import { ScrollView, ListView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import FullButton from '../Components/FullButton.js'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RecipiesScreenStyle'

class RecipiesScreen extends Component {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      rds: ds.cloneWithRows(['init'])
    }
  }

  getFromSafeInfo() {
    return fetch('http://mysafeinfo.com/api/data?list=alcoholicbeverages&format=json&abbreviate=false&case=lower')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          rds: this.state.rds.cloneWithRows(responseJson)
        })
      })
      .catch((error) => {console.error(error);});
  }


  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text></Text>
          <FullButton
            text='Get!'
            onPress={() => this.getFromSafeInfo()}
          />
          <ListView
            style={styles.list}
            dataSource={this.state.rds}
            renderRow={(rowData) => <Text> {rowData.name1} </Text>}
          />
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
