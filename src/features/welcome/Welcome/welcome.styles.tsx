import { StyleSheet } from 'react-native';
import { FONT_SIZES } from 'types/enums';

export default StyleSheet.create({
  userName: {
    fontSize: FONT_SIZES.LARGE_HEADER,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '50%',
    height: 30,
    marginTop: 25,
    marginBottom: 7.5,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    borderColor: 'gray',
    borderWidth: 1,
  },
});
