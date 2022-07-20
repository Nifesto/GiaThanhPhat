import {StyleSheet} from 'react-native';
import {
  COLOR,
  WIDTH,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH_WINDOW,
} from '../../base/core';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLOR.MAIN,
    paddingVertical: WIDTH * 17,
    width: WIDTH * 380,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WIDTH * 8,
  },
  btnText: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: COLOR.WHITE_P,
  },
});

export default styles;
