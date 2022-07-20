import {StyleSheet} from 'react-native';
import {
  COLOR,
  WIDTH,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH_WINDOW,
} from '../../base/core';

const styles = StyleSheet.create({
  body_input: {
    marginBottom: WIDTH * 14,
    marginHorizontal: WIDTH * 17,
  },
  top: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1,
    left: WIDTH * 20,
    top: WIDTH * 0,
    backgroundColor: COLOR.WHITE_P,
    paddingHorizontal: WIDTH * 2,
  },
  title: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_14,
    color: COLOR.BLACK_P,
    marginRight: WIDTH * 2,
  },
  input: {
    paddingHorizontal: WIDTH * 15,
    paddingVertical: 0,
    marginTop: WIDTH * 10,
    height: WIDTH * 48,
    borderRadius: WIDTH * 8,
    borderWidth: WIDTH * 1,
    borderColor: '#E8E8E8',
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_14,
    color: COLOR.BLACK_P,
  },
});

export default styles;
