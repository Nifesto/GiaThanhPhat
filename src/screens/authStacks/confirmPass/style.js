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
  },
  btnText: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: '#25282B',
  },
});

export default styles;
