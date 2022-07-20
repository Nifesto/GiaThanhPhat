import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import Images from '../../../assets/index';
import HeaderAuth from '../../../component/headerAuthStacks';
import InputAuth from '../../../component/inputAuth';
import Button from '../../../component/button';
import {
  COLOR,
  WIDTH,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH_WINDOW,
  ASYN,
} from '../../../base/core';
import API from '../../../api';
import axios from 'axios';
const Login = ({navigation}) => {
  const login = async () => {
    if (check) {
      await AsyncStorage.setItem(ASYN.userName, JSON.stringify(userName));
      await AsyncStorage.setItem(ASYN.password, JSON.stringify(password));
    } else {
      await AsyncStorage.setItem(ASYN.userName, '');
      await AsyncStorage.setItem(ASYN.password, '');
    }
  };
  const [check, setCheck] = React.useState(true);
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const link = API.login();
  const api = async () => {
    let formData = new FormData();
    formData.append('phone', userName);
    formData.append('password', password);
    formData.append('fcm_token', '123');
    const res = await axios({
      method: 'post',
      url: link,
      data: formData,
    });
    console.log(res.data.token);

    if (res.data.status === false) {
      Alert.alert(res.data.msg);
    } else {
      navigation.navigate('TabBar');
      const token = res.data.token;
      await AsyncStorage.setItem(ASYN.token, JSON.stringify(token));
    }
  };
  return (
    <View style={styles.container}>
      <HeaderAuth title="Đăng nhập" />
      <ScrollView style={{flex: 1}}>
        <View style={styles.body}>
          <View style={styles.body_input}>
            <View style={styles.top}>
              <Text style={styles.title}>Tài khoản</Text>
              <Text style={{...styles.title, color: '#FB4E4E'}}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={text => setUserName(text)}
              value={userName}
              placeholder=""
            />
          </View>
          <View style={styles.body_input}>
            <View style={styles.top}>
              <Text style={styles.title}>Mật khẩu</Text>
              <Text style={{...styles.title, color: '#FB4E4E'}}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder=""
            />
          </View>
          <View style={styles.more}>
            <TouchableOpacity onPress={() => setCheck(!check)}>
              <Image
                source={check ? Images.iconRadioCheck : Images.iconRadioUnCheck}
                style={styles.iconCheck}
              />
            </TouchableOpacity>
            <Text style={styles.remember}>Nhớ đăng nhập</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ForgetPass')}>
              <Text style={styles.forget}>Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>
          <Button
            title="Đăng nhập"
            onPress={() => {
              api();
            }}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.btnText}>Bạn chưa có tài khoản? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{...styles.btnText, color: COLOR.MAIN}}>
              Đăng ký ngay
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
