import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    borderTopColor: Colors.border,
    borderBottomColor: Colors.frost,
    borderTopWidth: 10,
    borderBottomWidth: 5,
    backgroundColor: Colors.ricePaper
  },
  name: {
    margin: 18,
    textAlign: 'center',
    color: Colors.panther,
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.bold
  },
  description: {
    margin: 18,
    textAlign: 'left',
    color: Colors.panther,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.italic
  }
})
