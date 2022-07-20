import {StyleSheet, Platform, Dimensions} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  HEIGHT,
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
  main: {
    flex: 1,
  },
  containerItem: {
    flexDirection: 'row',
    paddingHorizontal: WIDTH * 17,
    paddingVertical: WIDTH * 17,
    justifyContent: 'space-between',
  },
  imageProduct: {
    width: WIDTH * 91,
    height: WIDTH * 121,
    resizeMode: 'cover',
    borderRadius: WIDTH * 10,
    borderColor: COLOR.MAIN,
    borderWidth: WIDTH * 1,
    marginRight: WIDTH * 16,
  },
  infoItem: {
    flex: 1,
    paddingLeft: WIDTH * 4,
    justifyContent: 'space-between',
    paddingRight: WIDTH * 4,
  },
  name_prd: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONTSIZE.f_24,
    color: COLOR.BLACK_P,
  },
  brand: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_10,
    color: '#CACCCF',
  },
  icon: {
    width: WIDTH * 32,
    height: WIDTH * 32,
    resizeMode: 'contain',
  },
  price: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: COLOR.MAIN,
  },
  pack: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_12,
    color: '#CACCCF',
  },
  quantity: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
  },
  text_footer: {
    fontSize: FONTSIZE.f_16,
    fontFamily: FONT_FAMILY.medium,
    color: COLOR.BLACK_P,
    marginBottom: WIDTH * 20,
  },
  footer: {
    paddingHorizontal: WIDTH * 17,
    paddingTop: WIDTH * 34,
    paddingBottom: WIDTH * 28,
  },
  footer_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
