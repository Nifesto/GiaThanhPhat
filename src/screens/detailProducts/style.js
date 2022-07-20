import {View, StyleSheet, Alert} from 'react-native';

import {
  COLOR,
  WIDTH_WINDOW,
  WIDTH,
  FONT_FAMILY,
  FONTSIZE,
} from '../../base/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: WIDTH_WINDOW,
    height: WIDTH * 300,
    borderBottomRightRadius: WIDTH * 30,
    borderBottomLeftRadius: WIDTH * 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: WIDTH_WINDOW,
    height: WIDTH * 300,
    resizeMode: 'contain',
    borderBottomRightRadius: WIDTH * 30,
    borderBottomLeftRadius: WIDTH * 30,
  },
  dots: {
    top: WIDTH * 300,
  },
  dot1: {
    backgroundColor: '#E46000',
    width: 18,
    height: 6,
  },
  dot: {width: 6, height: 6, backgroundColor: '#E3E6EA'},
  header: {
    marginVertical: WIDTH * 25,
    paddingHorizontal: WIDTH * 17,
  },
  name: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_24,
    color: COLOR.BLACK_P,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_14,
    color: '#CACCCF',
  },
  priceText: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_18,
    color: COLOR.MAIN,
  },
  body: {
    backgroundColor: COLOR.WHITE_P,
  },
  desc: {
    marginHorizontal: WIDTH * 17,
  },
  title: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
    paddingHorizontal: WIDTH * 17,
    marginTop: WIDTH * 23,
  },
  desc_content: {
    fontFamily: FONT_FAMILY.semi,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
  },
  mass: {},
  btnSize: {
    padding: WIDTH * 9,
    backgroundColor: COLOR.WHITE_P,
    marginHorizontal: WIDTH * 17,
    // marginBottom: WIDTH * 17,
    borderRadius: WIDTH * 12,
    width: WIDTH * 56,
    height: WIDTH * 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: WIDTH * 17,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  btn: {
    marginRight: WIDTH * 15,
    borderRadius: WIDTH * 10,
    width: WIDTH * 115,
    height: WIDTH * 115,
    marginHorizontal: WIDTH * 17,
    marginTop: WIDTH * 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    marginBottom: WIDTH * 39,
  },
  txtSize: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONTSIZE.f_8,
    color: COLOR.BLACK_P,
    textAlign: 'center',
  },
  title1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category_name: {
    paddingHorizontal: WIDTH * 10,
    backgroundColor: COLOR.MAIN,
    borderTopRightRadius: WIDTH * 25,
    paddingVertical: WIDTH * 7,
  },
  category_extra: {
    height: WIDTH * 35,
    flex: 1,
    backgroundColor: COLOR.MAIN,
  },
  category_extra1: {
    height: WIDTH * 35,
    backgroundColor: COLOR.WHITE_P,
    borderBottomLeftRadius: WIDTH * 15,
  },
  nameText: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_15,
    color: COLOR.WHITE_P,
  },
  footer: {
    backgroundColor: COLOR.WHITE_P,
    flexDirection: 'row',
    paddingHorizontal: WIDTH * 17,
    paddingVertical: WIDTH * 24,
  },
  iconAddCart: {
    width: WIDTH * 83,
    height: WIDTH * 58,
    resizeMode: 'contain',
    tintColor: COLOR.MAIN,
    marginRight: WIDTH * 16,
  },
  btn_buy: {
    width: WIDTH * 281,
    height: WIDTH * 58,
    backgroundColor: COLOR.MAIN,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WIDTH * 8,
  },
  text_buy: {
    fontSize: FONTSIZE.f_18,
    fontFamily: FONT_FAMILY.regular,
    color: COLOR.WHITE_P,
  },
});

export default styles;
