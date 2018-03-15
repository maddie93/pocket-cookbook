import {StyleSheet} from 'react-native'
import {Fonts, Metrics, Colors, ApplicationStyles} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  applicationView: {
    flex: 1
  },
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    margin: Metrics.baseMargin
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
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
    }
})
