import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
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
    // paddingHorizontal: WIDTH * 16,
    backgroundColor: COLOR.WHITE_P,
  },
  header: {
    flexDirection: 'row',
    marginTop: WIDTH * 52,
    paddingHorizontal: WIDTH * 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEEEE',
    borderRadius: WIDTH * 30,
    paddingLeft: WIDTH * 25,
    marginRight: WIDTH * 87,
    height: WIDTH * 32,
    paddingHorizontal: 0,
  },
  Search_input: {
    padding: 0,
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONTSIZE.f_17,
  },
  iconSearch: {
    width: WIDTH * 18,
    height: WIDTH * 18,
    resizeMode: 'contain',
    marginRight: WIDTH * 20,
  },
  iconCart: {
    width: WIDTH * 24,
    height: WIDTH * 24,
    resizeMode: 'contain',
    marginRight: WIDTH * 10,
  },
  Cart: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    width: WIDTH * 20,
    height: WIDTH * 20,
    borderRadius: 10,
    backgroundColor: '#E00024',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -5,
    right: -2,
  },
  text: {
    fontSize: FONTSIZE.f_14,
    color: COLOR.WHITE_P,
  },
  category: {
    marginTop: WIDTH * 16,
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH * 16,
    marginBottom: WIDTH * 16,
  },
  button: {
    marginRight: WIDTH * 40,
    justifyContent: 'center',
    paddingVertical: WIDTH * 9,
  },
  btn_text: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_17,
    color: 'red',
  },
  title: {
    flexDirection: 'row',
    paddingHorizontal: WIDTH * 16,
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
  name: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_15,
    color: COLOR.WHITE_P,
  },
  more: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_11,
    color: COLOR.MAIN,
  },
  products: {
    marginBottom: WIDTH * 16,
    width: WIDTH * 121,
    height: WIDTH * 153,
    borderRadius: WIDTH * 16,
    backgroundColor: COLOR.WHITE_P,
    marginRight: WIDTH * 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  image: {
    width: WIDTH * 121,
    height: WIDTH * 78,
    resizeMode: 'stretch',
    borderTopRightRadius: WIDTH * 16,
    borderTopLeftRadius: WIDTH * 16,
  },
  prd_name: {
    fontSize: FONTSIZE.f_11,
    fontFamily: FONT_FAMILY.regular,
    color: COLOR.BLACK_P,
  },
  prd_price: {
    fontSize: FONTSIZE.f_13,
    fontFamily: FONT_FAMILY.regular,
    color: COLOR.MAIN,
  },
  prd_origin: {
    fontSize: FONTSIZE.f_11,
    fontFamily: FONT_FAMILY.regular,
    color: '#9A9A9D',
  },
});

export default styles;
