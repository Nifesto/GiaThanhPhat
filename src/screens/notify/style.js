import {StyleSheet} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../base/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE_P,
  },
  line: {
    width: WIDTH_WINDOW,
    height: WIDTH * 8,
    backgroundColor: '#E5E5E5',
  },
  flt: {},
  title: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
  },
  icon: {
    width: WIDTH * 40,
    height: WIDTH * 40,
    resizeMode: 'contain',
    tintColor: COLOR.MAIN,
  },
});

export default styles;
