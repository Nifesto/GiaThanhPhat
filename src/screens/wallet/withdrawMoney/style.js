import {Platform, StyleSheet} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../../base/core';

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
    backgroundColor: COLOR.WHITE_P,
    flex: 1,
  },
  title_input: {
    fontSize: FONTSIZE.f_18,
    fontFamily: FONT_FAMILY.bold,
    color: COLOR.BLACK_P,
  },
  title: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_14,
    color: COLOR.BLACK_P,
    marginHorizontal: WIDTH * 17,
    marginTop: WIDTH * 24,
  },
  title_body: {},
  btn: {
    shadowColor:
      Platform.OS === 'ios' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 1.5)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: Platform.OS === 'ios' ? 5 : 2.39,
    shadowRadius: Platform.OS === 'ios' ? 5 : 10.3,
    elevation: Platform.OS === 'ios' ? 0 : 20,
    backgroundColor: COLOR.WHITE_P,
    paddingHorizontal: WIDTH * 17,
    paddingVertical: WIDTH * 17,
    marginRight: WIDTH * 11,
    borderRadius: WIDTH * 16,
    marginVertical: WIDTH * 16,
    width: WIDTH * 116,
  },
  value: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONTSIZE.f_15,
    color: COLOR.BLACK_P,
    textAlign: 'center',
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginHorizontal: WIDTH * 16,
    marginVertical: WIDTH * 24,
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
  input: {
    paddingHorizontal: WIDTH * 15,
    paddingVertical: 0,
    marginTop: WIDTH * 10,
    height: WIDTH * 76,
    borderRadius: WIDTH * 8,
    borderWidth: WIDTH * 1,
    borderColor: '#E8E8E8',
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_14,
    color: COLOR.BLACK_P,
  },
  body_input: {
    marginHorizontal: WIDTH * 17,
    marginBottom: WIDTH * 16,
  },
  infor_text: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
  },
  view_infor: {
    flexDirection: 'row',
    marginBottom: WIDTH * 24,
    marginHorizontal: WIDTH * 17,
    alignItems: 'center',
  },
  title_infor: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
  },
  content_infor: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
  },
  icon: {
    width: WIDTH * 33,
    height: WIDTH * 17,
    resizeMode: 'contain',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: WIDTH * 17,
  },
  btn_text: {
    fontSize: FONTSIZE.f_16,
    fontFamily: FONT_FAMILY.regular,
    color: COLOR.WHITE_P,
  },
  btn_confirm: {
    backgroundColor: COLOR.MAIN,
    paddingVertical: WIDTH * 17,
    width: 380,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WIDTH * 8,
  },
});

export default styles;
