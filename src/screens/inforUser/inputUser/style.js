import {StyleSheet, Platform, Dimensions} from 'react-native';
import {COLOR, FONTSIZE, FONT_FAMILY, HEIGHT, WIDTH} from '../../../base/core';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: WIDTH * 8,
    marginBottom: WIDTH * 24,
  },
  title: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONTSIZE.f_14,
    color: COLOR.BLACK_P,
    fontWeight: '500',
  },
  require: {
    fontFamily: FONT_FAMILY.semi,
    fontSize: FONTSIZE.f_11,
    color: '#FB4E4E',
    fontWeight: '600',
  },
  viewTitle: {
    flexDirection: 'row',
    position: 'absolute',
    top: -WIDTH * 10,
    backgroundColor: COLOR.WHITE_P,
    left: WIDTH * 15,
    paddingHorizontal: WIDTH * 1.5,
  },
  input: {
    height: HEIGHT * 6,
    paddingHorizontal: WIDTH * 10,
    color: COLOR.BLACK_P,
    fontSize: FONTSIZE.f_14,
    fontFamily: FONT_FAMILY.regular,
  },
});

export default styles;
