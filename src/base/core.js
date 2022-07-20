/* eslint-disable prettier/prettier */
import {Dimensions, Platform, StatusBar} from 'react-native';
var screenWidth = Math.round(Dimensions.get('window').width);
var screenHeight = Math.round(Dimensions.get('window').height);
var minScreenValue = Math.min(screenWidth, screenHeight);
const WIDTH_WINDOW = Dimensions.get('window').width;
const HEIGHT_WINDOW = Dimensions.get('window').height;
const HEIGHT = Dimensions.get('window').height / 100;
const HEIGHT_STATUS_BAR = StatusBar.currentHeight;
const WIDTH = WIDTH_WINDOW / 414;

var scale = 1;
if (Platform.OS === 'ios') {
  scale = 1;
} else if (minScreenValue <= 600) {
  scale = 1;
} else if (minScreenValue <= 900) {
  scale = 1.5;
} else if (minScreenValue <= 1200) {
  scale = 2;
}

const COLOR = {
  NONE: 'transparent',
  MAIN: '#FA4A0C',
  BLACK_P: '#25282B',
  WHITE_P: '#FFFFFF',
  GRAY_P: '#52575C',
  GRAY_S: '#CACCCF',
};

const FONTSIZE = {
  f_40: 40 * scale,
  f_28: 28 * scale,
  f_34: 34 * scale,
  f_24: 24 * scale,
  f_20: 20 * scale,
  f_18: 18 * scale,
  f_17: 17 * scale,
  f_16: 16 * scale,
  f_15: 15 * scale,
  f_14: 14 * scale,
  f_13: 13 * scale,
  f_12: 12 * scale,
  f_11: 11 * scale,
  f_10: 10 * scale,
  f_9: 9 * scale,
  f_8: 8 * scale,
};
export const makeid = length => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const FONT_FAMILY = {
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  semi: 'Inter-Bold',
  bold: 'Inter-SemiBold',
};

const ASYN = {
  saveDataUser: 'saveDataUser',
  fcmToken: 'fcmToken',
  userName: 'userName',
  password: 'password',
  token: 'token',
};

export {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH_WINDOW,
  HEIGHT_WINDOW,
  HEIGHT_STATUS_BAR,
  WIDTH,
  HEIGHT,
  ASYN,
};
