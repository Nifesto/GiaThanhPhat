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
  btn: {
    backgroundColor: COLOR.MAIN,
    paddingVertical: WIDTH * 17,
    width: WIDTH * 379,
    alignItems: 'center',
    borderRadius: WIDTH * 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: WIDTH * 227,
    marginBottom: WIDTH * 56,
  },
  btnText: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: '#25282B',
  },
  top: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1,
    left: WIDTH * 30,
    top: WIDTH * 22,
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
  textOTP:{
    fontFamily:FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color:"#25282B",
    textAlign:'center'
  },
  code:{
    paddingHorizontal: WIDTH*15,
    paddingVertical:0,
    marginTop: WIDTH * 10,
    height: WIDTH * 48,
    borderRadius: WIDTH * 8,
    borderWidth: WIDTH * 1,
    borderColor: '#E8E8E8',
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_14,
    color: COLOR.BLACK_P,
  }
});

export default styles;
