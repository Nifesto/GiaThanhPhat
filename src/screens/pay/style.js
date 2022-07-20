import {StyleSheet} from 'react-native';
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
  line: {
    width: WIDTH_WINDOW,
    height: WIDTH * 8,
    backgroundColor: '#E5E5E5',
  },
  main: {
    flex: 1,
    backgroundColor: COLOR.WHITE_P,
    marginHorizontal: WIDTH * 17,
    marginTop: WIDTH * 17,
  },
  title: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_20,
    color: COLOR.BLACK_P,
    marginBottom: WIDTH * 17,
  },
  location_text: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
    marginBottom: WIDTH * 8,
    width: WIDTH * 341,
    height: WIDTH * 44,
  },

  iconLocation: {
    width: WIDTH * 20,
    height: WIDTH * 20,
    resizeMode: 'contain',
    marginRight: WIDTH * 20,
  },
  btn:{
    marginLeft: WIDTH *40,
    marginBottom: WIDTH*34
  },
  btnChoose: {
    flexDirection: 'row',
    marginBottom:WIDTH*26,
    alignItems: 'center',
  },
  iconCheck: {
    width: WIDTH * 20,
    height: WIDTH * 20,
    resizeMode: 'contain',
    marginRight: WIDTH * 10,
  },
  nameCheck: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
  },
  top: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1,
    left: WIDTH * 20,
    top: WIDTH * 0,
    backgroundColor: COLOR.WHITE_P,
  },
  title_input: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
    marginRight: WIDTH * 2,
  },
  input: {
    paddingHorizontal: WIDTH * 15,
    paddingVertical: 0,
    marginTop: WIDTH * 10,
    height: WIDTH * 114,
    borderRadius: WIDTH * 8,
    borderWidth: WIDTH * 1,
    borderColor: '#E8E8E8',
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_14,
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
