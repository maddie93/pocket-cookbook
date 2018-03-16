import { StackNavigator } from 'react-navigation'
import AddNewRecipeScreen from '../Containers/AddNewRecipeScreen'
import DrinkScreen from '../Containers/DrinkScreen'
import RecipiesScreen from '../Containers/RecipiesScreen'
import IngredientsListScreen from '../Containers/IngredientsListScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  AddNewRecipeScreen: { screen: AddNewRecipeScreen },
  DrinkScreen: { screen: DrinkScreen },
  RecipiesScreen: { screen: RecipiesScreen },
  IngredientsListScreen: { screen: IngredientsListScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'IngredientsListScreen',
  navigationOptions: {
    title: 'Hello nav',
    headerStyle: styles.header
  }
})

export default PrimaryNav
