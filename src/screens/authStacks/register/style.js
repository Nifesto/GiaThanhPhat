import {StyleSheet} from 'react-native';
import {
  COLOR,
  WIDTH,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH_WINDOW,
} from '../../../base/core';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE_P,
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: WIDTH * 16,
    paddingTop: WIDTH * 22,
  },
  more: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: WIDTH * 10,
    marginBottom: WIDTH * 25,
  },
  square: {
    width: WIDTH * 18,
    height: WIDTH * 18,
    resizeMode: 'contain',
    marginRight: WIDTH * 7,
  },
  remember: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: '#52575C',
    flex: 1,
  },
  forget: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: COLOR.MAIN,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: WIDTH * 127,
    marginBottom: WIDTH * 56,
  },
  btnText: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: COLOR.WHITE_P,
  },
  Ft_text: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: '#25282B',
  },
  body_input: {
    marginBottom: WIDTH * 14,
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
