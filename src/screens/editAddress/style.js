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
  body: {
    flex: 1,
  },
  title: {
    marginBottom: WIDTH * 14,
    fontSize: FONTSIZE.f_18,
    fontFamily: FONT_FAMILY.bold,
    color: COLOR.BLACK_P,
    marginTop: WIDTH * 24,
    marginHorizontal: WIDTH * 17,
  },
  title_more: {
    fontSize: FONTSIZE.f_16,
    fontFamily: FONT_FAMILY.bold,
    color: COLOR.BLACK_P,
  },
  more: {
    marginTop: WIDTH * 10,
    marginHorizontal: WIDTH * 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: WIDTH * 33,
    height: WIDTH * 17,
    resizeMode: 'contain',
  },
  btn: {
    backgroundColor: COLOR.WHITE_P,
    paddingVertical: WIDTH * 17,
    width: WIDTH * 380,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WIDTH * 8,
    marginTop: WIDTH * 17,
    borderWidth: WIDTH * 1,
    borderColor: COLOR.MAIN,
  },
  btnText: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: COLOR.MAIN,
  },

  body_input: {
    marginBottom: WIDTH * 14,
    marginHorizontal: WIDTH * 17,
  },
  top: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1,
    left: WIDTH * 20,
    top: WIDTH * 0,
    backgroundColor: COLOR.WHITE_P,
    paddingHorizontal: WIDTH * 2,
  },
  title_modal: {
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
    color: COLOR.BLACK_P,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  iconCheck: {
    width: WIDTH * 20,
    height: WIDTH * 20,
    resizeMode: 'contain',
    marginRight: WIDTH * 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WIDTH * 17,
    paddingVertical: WIDTH * 5,
  },
  name: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
  },
});

export default styles;
