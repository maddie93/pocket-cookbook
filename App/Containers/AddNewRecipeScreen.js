import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, ListView, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import FullButton from '../Components/FullButton.js'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AddNewRecipeScreenStyle'
const remote = 'https://images6.alphacoders.com/659/thumb-1920-659174.jpg';

class AddNewRecipeScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
      i1: '',
      i2: '',
      i3: ''
    }
  }

  addToDB() {
  //  return fetch(`http://mysafeinfo.com/api/data?list=alcoholicbeverages&format=json&dsc=${this.state.ing[0]},contains`)

    return fetch(`https://alkore-c976.restdb.io/rest/drinki`, {
      method: 'post',
      headers:    { 'cache-control': 'no-cache',
        'x-apikey': 'b79d180231fa5dc79dde2fbb3908705b96ee4',
        'content-type': 'application/json'
       },
      body: JSON.stringify({name: this.state.text, ingredients: [this.state.i1, this.state.i2, this.state.i3]})
    }
    )
      .then((response) => response.json()).
      then((responseJson) => {
            this.props.navigation.navigate('RecipiesScreen', {ingrediends: this.state.ing})
      })
      .catch((error) => {console.error(error);});
  }


  render () {
    return (
      <View style={styles.container}>
        <ImageBackground  style={{flex: 1}}
          source={{ uri: remote }}
        >
        <KeyboardAvoidingView behavior='position'>
          <Text style={styles.label}> Nazwa </Text>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placholder='Wpisz coś'
          />
          <Text style={styles.label}> Składnik </Text>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.input}
            onChangeText={(i1) => this.setState({i1})}
            value={this.state.i1}
            placholder='Wpisz coś'
          />
          <Text style={styles.label}> Składnik </Text>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.input}
            onChangeText={(i2) => this.setState({i2})}
            value={this.state.i2}
            placholder='Wpisz coś'
          />
          <Text style={styles.label}> Składnik </Text>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.input}
            onChangeText={(i3) => this.setState({i3})}
            value={this.state.i3}
            placholder='Wpisz coś'
          />
        </KeyboardAvoidingView>
        <FullButton
          text='Dodaj!'
          onPress={() => this.addToDB() }
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

export default connect(mapStateToProps, mapDispatchToProps)(AddNewRecipeScreen)
