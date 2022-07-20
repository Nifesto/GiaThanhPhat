import {StyleSheet, Platform, Dimensions} from 'react-native';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  HEIGHT,
  HEIGHT_STATUS_BAR,
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
  main: {
    flex: 1,
    paddingTop: WIDTH * 12,
  },
  backgroundWallet: {
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH * 381,
    height: WIDTH * 225,
    resizeMode: 'contain',
    marginHorizontal: WIDTH * 17,
  },
  wallets: {
    flex: 1,
    marginTop: WIDTH * 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wallet: {
    fontSize: FONTSIZE.f_16,
    fontFamily: FONT_FAMILY.semi,
    fontWeight: '600',
    color: COLOR.BLACK_P,
  },
  moneyWallet: {
    fontSize: FONTSIZE.f_40,
    fontFamily: FONT_FAMILY.bold,
    fontWeight: '700',
    color: '#2AC769',
  },
  nameButton: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
    fontWeight: '400',
  },
  icon: {
    width: WIDTH * 6,
    height: WIDTH * 6,
    resizeMode: 'contain',
  },
  btn: {
    alignItems: 'center',
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.WHITE_P,
    justifyContent: 'space-around',
    borderRadius: WIDTH * 16,
    marginHorizontal: WIDTH * 32,
    shadowColor:
      Platform.OS === 'ios' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 1.5)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: Platform.OS === 'ios' ? 5 : 2.39,
    shadowRadius: Platform.OS === 'ios' ? 5 : 10.3,
    elevation: Platform.OS === 'ios' ? 0 : 20,
    backgroundColor: '#FFFFFF',
    marginTop: -HEIGHT * 4.5,
    paddingVertical: WIDTH * 17,
  },
  icon: {
    width: WIDTH * 22,
    height: WIDTH * 22,
    resizeMode: 'contain',
    marginBottom: WIDTH * 10,
    tintColor: COLOR.MAIN,
  },
  namePurchase: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
    flex: 1,
  },
  date: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_14,
    color: '#A0A4A8',
  },
  title: {
    fontFamily: FONT_FAMILY.semi,
    fontSize: FONTSIZE.f_20,
    color: COLOR.BLACK_P,
    marginTop: WIDTH * 15,
    marginBottom: WIDTH * 18,
    marginHorizontal: WIDTH * 17,
  },
  containerItem: {
    flexDirection: 'row',
    marginVertical: WIDTH * 16,
    marginHorizontal: WIDTH * 17,
  },
  leftItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
    paddingRight: WIDTH * 4,
  },
  rightItem: {
    flex: 1,
    alignItems: 'flex-end',
  },
  lineItem: {
    height: WIDTH * 1,
    backgroundColor: '#E5E5E5',
    width: WIDTH_WINDOW,
    marginHorizontal: -WIDTH * 4,
  },
  iconItem: {
    width: WIDTH * 40,
    height: WIDTH * 40,
    resizeMode: 'contain',
    marginRight: WIDTH * 8,
  },
  money: {
    fontFamily: FONT_FAMILY.semi,
    fontWeight: '600',
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
  },
  status: {
    fontFamily: FONT_FAMILY.semi,
    fontWeight: '600',
    fontSize: FONTSIZE.f_14,
    color: '#2AC769',
  },
});

export default styles;
