import {StyleSheet, Platform, Dimensions} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH_WINDOW,
  HEIGHT_STATUS_BAR,
  WIDTH,
} from '../../base/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE_P,
  },
  header: {
    backgroundColor: COLOR.WHITE_P,
    height: WIDTH * 96,
    width: WIDTH_WINDOW,
    paddingTop: WIDTH * 54,
    paddingHorizontal: WIDTH * 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_20,
    color: COLOR.BLACK_P,
  },
  iconHeader: {
    width: WIDTH * 20,
    height: WIDTH * 20,
    resizeMode: 'contain',
  },
  line: {
    width: WIDTH_WINDOW,
    height: WIDTH * 8,
    backgroundColor: '#E5E5E5',
  },
  iconArrowLeft: {
    width: WIDTH * 12,
    height: WIDTH * 12,
    resizeMode: 'contain',
  },
  main: {},
  avatar: {
    width: WIDTH * 50,
    height: WIDTH * 50,
    resizeMode: 'cover',
    borderRadius: WIDTH * 7,
    marginRight: WIDTH * 4.5,
    marginRight: WIDTH * 20,
  },
  btnFirst: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: WIDTH * 16,
    backgroundColor: COLOR.WHITE_P,
    justifyContent: 'space-between',
    marginHorizontal: WIDTH * 17,
  },
  hello: {
    color: '#A0A4A8',
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONTSIZE.f_14,
  },
  name: {
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_16,
  },

  iconArrowRight: {
    width: WIDTH * 12,
    height: WIDTH * 12,
    resizeMode: 'contain',
  },
  mgb: {
    height: 2,
    backgroundColor: '#E5E5E5',
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WIDTH * 17,
    paddingVertical: WIDTH * 17,
    backgroundColor: COLOR.WHITE_P,
  },
  textContent: {
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONTSIZE.f_16,
    fontWeight: '500',
    flex: 1,
    marginLeft: WIDTH * 4.5,
  },
  iconArrowRight: {
    width: WIDTH * 12,
    height: WIDTH * 12,
    resizeMode: 'contain',
  },
});

export default styles;
