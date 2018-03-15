import React, { Component } from 'react'
import { View, ScrollView, ListView, Text, TextInput, ImageBackground, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import FullButton from '../Components/FullButton.js'
import Ingredient from '../Components/Ingredient.js'


// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/IngredientsListScreenStyle'
const remote = 'http://www.mobileswall.com/wp-content/uploads/2014/11/640-Food-l.jpg';

class IngredientsListScreen extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      ingredients: [],
      ingredientsDS: ds.cloneWithRows([]),
      text: ''
    };
  }

  onDataArrived(){
    var ingredients = this.state.ingredients.slice();
    ingredients.push(this.state.text);
    this.setState({
        ingredients: ingredients,
        ingredientsDS: this.state.ingredientsDS.cloneWithRows(ingredients),
        text: ''
    });
  }

  render () {
    return (

      <View style={styles.container}>
        <ImageBackground  style={{flex: 1}}
                source={{ uri: remote }}
                >
          <Text style={styles.sectionText}>IngredientsListScreen</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placholder='Wpisz coś'
          />
          <FullButton
            text='Dodaj składnik'
            onPress={() => this.onDataArrived()}
          />
          <ScrollView style={styles.container}>

          <ListView
            style={styles.list}
            dataSource={this.state.ingredientsDS}
            renderRow={(rowData) => <Ingredient name={rowData}/>}
          />
        </ScrollView>
        <FullButton
          text='Szukaj!'
          onPress={() => this.onDataArrived()}
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

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsListScreen)
