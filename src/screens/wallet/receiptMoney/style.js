import {StyleSheet} from 'react-native';
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
  header: {
    height: WIDTH * 105,
    width: WIDTH_WINDOW,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
  },
  title: {
    fontSize: FONTSIZE.f_18,
    fontFamily: FONT_FAMILY.bold,
    color: COLOR.BLACK_P,
    marginVertical: WIDTH * 17,
  },
  content: {
    fontSize: FONTSIZE.f_16,
    fontFamily: FONT_FAMILY.regular,
    color: COLOR.BLACK_P,
  },
  main: {
    marginHorizontal: WIDTH * 17,
    flex: 1,
  },
  line: {
    width: WIDTH_WINDOW,
    height: WIDTH * 8,
    backgroundColor: '#E5E5E5',
  },
  infor_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: WIDTH * 20,
    borderBottomWidth: WIDTH * 1,
    borderColor: COLOR.BLACK_P,
    paddingVertical: WIDTH * 15,
  },
  footer: {
    height: WIDTH_WINDOW * 104,
    width: WIDTH_WINDOW,
    backgroundColor: COLOR.WHITE_P,
    marginVertical: WIDTH * 24,
  },
  btn: {
    width: WIDTH * 380,
    height: WIDTH * 56,
    marginVertical: WIDTH * 24,
    borderRadius: WIDTH * 8,
    backgroundColor: COLOR.MAIN,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: WIDTH * 16,
  },
  upload_view: {
    marginTop: WIDTH * 20,
    width: WIDTH_WINDOW - WIDTH * 34,
    borderRadius: WIDTH * 12,
    paddingHorizontal: WIDTH * 10,
    paddingVertical: WIDTH * 10,
    justifyContent: 'space-between',
    height: WIDTH * 300,
    backgroundColor: COLOR.WHITE_P,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: WIDTH * 150,
    height: WIDTH * 70,
    resizeMode: 'contain',
  },
  upload:{
    alignItems: 'center',
  }
});

export default styles;
