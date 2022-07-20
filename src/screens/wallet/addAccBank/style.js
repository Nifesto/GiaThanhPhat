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
});

export default styles;
