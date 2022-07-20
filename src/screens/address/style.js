import {StyleSheet} from 'react-native';
import {
  WIDTH,
  WIDTH_WINDOW,
  COLOR,
  FONT_FAMILY,
  FONTSIZE,
} from '../../base/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    width: WIDTH_WINDOW,
    height: WIDTH * 8,
    backgroundColor: '#E5E5E5',
  },
  main: {flex: 1},

  home: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
  },
  full_address: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: '#A0A4A8',
    width: WIDTH * 340,
    marginLeft: WIDTH * 46,
    marginVertical: WIDTH * 10,
  },
  defaultTrue: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONTSIZE.f_16,
    color: COLOR.MAIN,
  },
  defaultFalse: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: '#4263EB',
  },
  icon: {
    width: WIDTH * 24,
    height: WIDTH * 24,
    resizeMode: 'contain',
    marginRight: WIDTH * 18,
  },
  containerItem: {
    padding: WIDTH * 17,
    backgroundColor: COLOR.WHITE_P,
  },
  header_flt: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  infor: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: '#52575C',
  },
  footer: {
    paddingVertical: WIDTH * 24,
    alignItems: 'center',
    backgroundColor: COLOR.WHITE_P,
  },
});

export default styles;
