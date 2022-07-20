import {StyleSheet, Platform, Dimensions} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  HEIGHT,
  WIDTH,
  WIDTH_WINDOW,
} from '../../base/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE_P,
  },
  body: {
    marginHorizontal: WIDTH * 17,
  },
  line: {
    width: WIDTH_WINDOW,
    height: WIDTH * 8,
    backgroundColor: '#E5E5E5',
  },
  avatar: {
    width: WIDTH * 90,
    height: WIDTH * 90,
    borderRadius: WIDTH * 45,
    resizeMode: 'cover',
  },
  btnCamera: {
    backgroundColor: COLOR.MAIN,
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH * 42,
    height: WIDTH * 42,
    borderRadius: WIDTH * 30,
  },
  viewCamera: {
    position: 'absolute',
    right: -WIDTH * 25,
    top: -WIDTH * 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH * 50,
    height: WIDTH * 50,
    borderRadius: WIDTH * 30,
    backgroundColor: COLOR.WHITE_P,
  },
  iconCamera: {
    width: WIDTH * 16,
    height: WIDTH * 16,
    resizeMode: 'contain',
  },
  bntAvatar: {
    alignSelf: 'center',
    marginVertical: WIDTH * 42,
  },
});

export default styles;
