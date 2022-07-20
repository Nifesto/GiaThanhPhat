import {StyleSheet} from 'react-native';
import {COLOR, FONTSIZE, FONT_FAMILY, WIDTH} from '../../base/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE_P,
    alignItems: 'center',
  },
  iconDone: {
    marginTop: WIDTH * 95,
    width: WIDTH * 214,
    height: WIDTH * 165,
    resizeMode: 'contain',
    marginBottom: WIDTH * 24,
  },
  text: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
    marginBottom: WIDTH * 32,
  },
  btn: {
    marginTop: WIDTH *20,
    backgroundColor: COLOR.WHITE_P,
    paddingVertical: WIDTH * 17,
    width: WIDTH * 380,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WIDTH * 8,
    borderColor: COLOR.MAIN,
    borderWidth: WIDTH * 1,
  },
  btnText: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: COLOR.MAIN,
  },
});

export default styles;
