import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, ListView, Image, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import FullButton from '../Components/FullButton.js'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DrinkScreenStyle'

class DrinkScreen extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var ings = []
    if (this.props.navigation.state.params.ingredients){
      ings = this.props.navigation.state.params.ingredients.slice()
    }
    this.state = {
      name: this.props.navigation.state.params.name,
      ingredients: ings,
      inDS: ds.cloneWithRows(ings)
    };
  }

  render () {
    const img = 'https://www.socialandcocktail.co.uk/wp-content/uploads/2011/12/Cosmopolitan-1.jpg';
    const remote = 'https://images6.alphacoders.com/659/thumb-1920-659174.jpg';

    return (
      <View style={styles.container}>
        <ImageBackground  style={{flex: 1}}
          source={{ uri: remote }}
        >
          <Text style={styles.name}>{this.state.name}</Text>
          <Image style={{flex: 1}} source={{ uri: img }}/>
          <ListView
            enableEmptySections={true}
            style={styles.list}
            dataSource={this.state.inDS}
            renderRow={(rowData) => <Text style={styles.item}>{rowData}</Text>}
          />
        <FullButton
          text='Take me back'
          onPress={() =>
            this.props.navigation.navigate('RecipiesScreen', {ingrediends: this.state.ing})
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

export default connect(mapStateToProps, mapDispatchToProps)(DrinkScreen)
