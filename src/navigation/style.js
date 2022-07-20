import {StyleSheet} from 'react-native';
import {COLOR, WIDTH, FONTSIZE, FONT_FAMILY, WIDTH_WINDOW} from '../base/core';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE_P,
  },
  tabBar: {
    flexDirection: 'row',
    paddingBottom: WIDTH * 18,
    paddingTop: WIDTH * 24,
    backgroundColor: COLOR.WHITE_P,
    borderTopLeftRadius: WIDTH * 16,
    borderTopRightRadius: WIDTH * 16,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: WIDTH * 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: WIDTH * 24,
    height: WIDTH * 24,
    tintColor: '#130F26',
    marginBottom: WIDTH * 11,
  },
  label: {
    fontSize: FONTSIZE.f_9,
    fontFamily: FONT_FAMILY.bold,
    color: '#130F26',
  },
});

export default styles;
