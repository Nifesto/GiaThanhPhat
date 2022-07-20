import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../base/core';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE_P,
    height: WIDTH * 96,
    width: WIDTH_WINDOW,
    paddingTop: WIDTH * 54,
    paddingBottom: WIDTH * 14,
    paddingHorizontal: WIDTH * 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    width: WIDTH * 20,
    height: WIDTH * 50,
    justifyContent: 'center',
  },
  icon: {
    width: WIDTH * 8,
    height: WIDTH * 12,
    resizeMode: 'contain',
  },
  title: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_20,
    color: COLOR.BLACK_P,
  },
  iconDone: {
    width: WIDTH * 24,
    height: WIDTH * 24,
    resizeMode: 'contain',
  },
});

export default styles;
