import {StyleSheet} from 'react-native'
import {Fonts, Metrics, Colors, ApplicationStyles} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  applicationView: {
    flex: 1,
    backgroundColor: Colors.bloodOrange
  },
  container: {
    flex: 1
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    margin: Metrics.baseMargin,
    color: Colors.snow
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
    height: 30,
    borderWidth: 0
  }

})
