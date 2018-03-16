import { StyleSheet } from 'react-native'
import {Fonts, Metrics, Colors, ApplicationStyles} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  applicationView: {
    flex: 1,
    backgroundColor: Colors.background

  },
  container: {
    flex: 1
  },
  list: {
    flex: 1
  },
  input: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    margin: Metrics.baseMargin,
    color: Colors.panther,
    backgroundColor: Colors.cloud,
    height: 30
  },
  name: {
    textAlign: 'center',
    backgroundColor: Colors.ember,
    height: 50,
    fontFamily: Fonts.type.emphasis,
    fontSize: Fonts.size.h1,
    margin: Metrics.doubleBaseMargin,
  },
  item: {
    flex: 1,
    marginVertical: 5,
    borderTopColor: Colors.steel,
    borderBottomColor: Colors.frost,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.silver,
    margin: 18,
    textAlign: 'center',
    color: Colors.panther,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }
})
