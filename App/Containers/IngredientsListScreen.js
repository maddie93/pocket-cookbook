import React, { Component } from 'react'
import { View, ScrollView, ListView, Text, TextInput, ImageBackground, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import FullButton from '../Components/FullButton.js'
import Ingredient from '../Components/Ingredient.js'
import PrimaryNav from '../Navigation/AppNavigation.js'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/IngredientsListScreenStyle'
const remote = 'https://images6.alphacoders.com/659/thumb-1920-659174.jpg';

class IngredientsListScreen extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var ings = []
    if (this.props.navigation.state.ingredients){
      ings = this.props.navigation.state.ingredients.slice()
    }
    this.state = {
      ingredients: ings,
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
          <Text style={styles.sectionText}>Podaj listę składników... </Text>
          <TextInput
            underlineColorAndroid="transparent"
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
              enableEmptySections={true}
              style={styles.list}
              dataSource={this.state.ingredientsDS}
              renderRow={(rowData) => <Ingredient name={rowData}/>}
            />
          </ScrollView>
          <FullButton
            text='Szukaj!'
            onPress={() =>
              this.props.navigation.navigate('RecipiesScreen', {ing: this.state.ingredients})
            }
        />
        <FullButton
          text='Dodaj nowy!'
          onPress={() =>
            this.props.navigation.navigate('AddNewRecipeScreen', {ing: this.state.ingredients})
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

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsListScreen)
