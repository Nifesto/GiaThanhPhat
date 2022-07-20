import {StyleSheet} from 'react-native';
import {
  COLOR,
  WIDTH,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH_WINDOW,
} from '../../base/core';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE_P,
    flex: 1,
  },
  header: {
    alignItems: 'center',
  },
  imgHeader: {
    width: WIDTH_WINDOW,
    height: WIDTH * 298,
  },
  title: {
    fontSize: FONTSIZE.f_18,
    color: COLOR.BLACK_P,
    fontFamily: FONT_FAMILY.semi,
    marginTop: WIDTH * 56,

  },
});

export default styles;
