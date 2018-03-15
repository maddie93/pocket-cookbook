import React, { Component } from 'react'
import { View, ScrollView, ListView, Text, ImageBackground, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import FullButton from '../Components/FullButton.js'
import Recipe from '../Components/Recipe.js'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RecipiesScreenStyle'
const remote = 'https://images6.alphacoders.com/659/thumb-1920-659174.jpg';

class RecipiesScreen extends Component {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var ings = props.navigation.state.params.ing;
    this.state = {
      ing: props.navigation.state.params.ing,
      rds: ds.cloneWithRows([])
    }
    this.getFromSafeInfo()
  }

  getFromSafeInfo() {
    return fetch(`http://mysafeinfo.com/api/data?list=alcoholicbeverages&format=json&dsc=${this.state.ing[0]},contains`)
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
      <View style={styles.container}>
        <ImageBackground  style={{flex: 1}}
          source={{ uri: remote }}
        >
          <FullButton
            text='Odśwież'
            onPress={() => this.getFromSafeInfo()}
          />
          <ScrollView>

            <ListView
              enableEmptySections={true}
              style={styles.list}
              dataSource={this.state.rds}
              renderRow={(rowData) => <Recipe name={rowData.nm} description={rowData.dsc} />}
            />
          </ScrollView>
          
            <FullButton
              text='Take me back'
              onPress={() =>
                this.props.navigation.navigate('IngredientsListScreen', {ingrediends: this.state.ing})
              }
            />
          </ImageBackground>
      </View>
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
