import {StyleSheet} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../../base/core';

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
  main: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  containerItem: {
    paddingHorizontal: WIDTH * 17,
    paddingTop: WIDTH * 17,
    paddingBottom: WIDTH * 17,
    backgroundColor: COLOR.WHITE_P,
  },
  text: {
    fontFamily: FONT_FAMILY.regular,
    fontWeight: '600',
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
    flex: 1,
    marginBottom: WIDTH * 24,
  },
  defaultTrue: {
    fontFamily: FONT_FAMILY.medium,
    fontWeight: '500',
    fontSize: FONTSIZE.f_16,
    color: COLOR.MAIN,
  },
  defaultFalse: {
    fontFamily: FONT_FAMILY.regular,
    fontWeight: '400',
    fontSize: FONTSIZE.f_16,
    color: '#4263EB',
  },
  modify: {
    flexDirection: 'row',
  },
  btnAdd: {
    flexDirection: 'row',
    paddingVertical: WIDTH * 2.5,
    paddingHorizontal: WIDTH * 4,
    backgroundColor: COLOR.WHITE_P,
    alignItems: 'center',
  },
  iconPlus: {
    width: WIDTH * 14,
    width: WIDTH * 14,
    resizeMode: 'contain',
    marginRight: WIDTH * 13,
  },
});

export default styles;
