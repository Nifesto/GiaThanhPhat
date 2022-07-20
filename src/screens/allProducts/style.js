import {View, StyleSheet} from 'react-native';
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
  body: {
    flex: 1,

    paddingTop: WIDTH * 16,
  },
  header: {
    marginTop: WIDTH * 11,
    backgroundColor: COLOR.WHITE_P,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: WIDTH * 17,
  },
  header_right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  allPrd_text: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_18,
    color: COLOR.BLACK_P,
    marginRight: WIDTH * 150,
  },
  filter_Text: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
  },
  iconFilter: {
    width: WIDTH * 24,
    height: WIDTH * 24,
    resizeMode: 'contain',
    marginLeft: WIDTH * 10,
  },

  products: {
    marginTop: WIDTH * 16,
    marginBottom: WIDTH * 16,
    width: WIDTH * 121,
    height: WIDTH * 153,
    borderRadius: WIDTH * 16,
    marginLeft: WIDTH * 10,
    backgroundColor: COLOR.WHITE_P,
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
  centeredView: {
    width: WIDTH_WINDOW,
    height: WIDTH_WINDOW * 2,
    backgroundColor: COLOR.WHITE_P,
    paddingHorizontal: WIDTH * 17,
  },
  header_filter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: WIDTH * 35,
    borderBottomWidth: WIDTH * 1,
    paddingBottom: WIDTH * 10,
  },
  header_title: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_20,
    color: COLOR.BLACK_P,
  },
  iconX: {
    width: WIDTH * 19,
    height: WIDTH * 20,
    resizeMode: 'contain',
  },
  iconRadioCheck: {
    width: WIDTH * 20,
    height: WIDTH * 20,
    resizeMode: 'contain',
    marginRight: WIDTH * 10,
  },
  text: {
    color: COLOR.BLACK_P,
    fontSize: FONTSIZE.f_16,
    fontFamily: FONT_FAMILY.regular,
  },
  title: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_20,
    color: COLOR.BLACK_P,
  },
  btn: {
    width: WIDTH * 380,
    paddingVertical: WIDTH * 15,
    backgroundColor: COLOR.MAIN,
    alignItems: 'center',
    borderRadius: WIDTH * 15,
    marginBottom: WIDTH * 35,
  },
  body_filter: {
    flex: 1,
  },
  slider: {
    height: WIDTH * 100,
  },
  line: {
    width: WIDTH_WINDOW,
    height: WIDTH * 8,
    backgroundColor: '#E5E5E5',
  },
});

export default styles;
