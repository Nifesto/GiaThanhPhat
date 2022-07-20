import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYN} from '../base/core';

const REQUEST_API = async ({url, method, data, token}) => {
  const CurrentUser = await AsyncStorage.getItem(ASYN.saveDataUser);
  const Token = await AsyncStorage.getItem(ASYN.token);
  const headers = {
    'Content-Type': 'application/json',
    token: token || (Token ? JSON.parse(Token) : ''),
    // Authorization: `Bearer ${Token}`,
  };
  const config = {method, url, data, headers};
  try {
    const res = await axios(config);
    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    if (String(e).indexOf('Network Error') !== -1) {
      throw new Error('Không có internet');
    }
    // else if (
    //   e.message.indexOf('Request failed with status code 400') !== -1
    // ) {
    //   throw new Error('Vui lòng đăng nhập.');
    // }
    else {
      // AlertOnly(e.message);
      throw new Error(e);
    }
  }
};

export {REQUEST_API};
