import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    borderTopColor: Colors.steel,
    borderBottomColor: Colors.frost,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.silver
  },
  text: {
    margin: 18,
    textAlign: 'center',
    color: Colors.panther,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }

})
