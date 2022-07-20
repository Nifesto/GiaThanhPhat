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
    paddingHorizontal: WIDTH * 16,
    paddingTop: WIDTH * 22,
    flex: 1,
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
    marginBottom: WIDTH * 56,
  },
  btnText: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: '#25282B',
  },
  textOTP:{
    fontFamily:FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color:"#25282B",
    textAlign:'center'

  },
  header:{
    marginTop: WIDTH*32,
    paddingHorizontal: WIDTH * 16,
    alignItems:'center',
  }
});

export default styles;
