import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
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
} from '../../../base/core';
const ForgetPass = ({navigation}) => {
  const [acc, setAcc] = React.useState('');
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      console.log(code);
    } catch (error) {
      console.log(error);
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <View style={styles.container}>
        <HeaderAuth title="Quên mật khẩu" />
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.top}>
              <Text style={styles.title}>Quên mật khẩu</Text>
              <Text style={{...styles.title, color: '#FB4E4E'}}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={acc => setAcc(acc)}
              value={acc}
              placeholder=""
            />
            <Button title="Gửi đi" onPress={() => signInWithPhoneNumber(acc)} />
          </View>
          <View style={styles.footer}>
            <Text style={styles.btnText}>Bạn đã có tài khoản? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{...styles.btnText, color: COLOR.MAIN}}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <HeaderAuth title="Nhập mã OTP" />
      <View style={styles.header}>
        <Text style={styles.textOTP}>
          Mã OTP được chúng tôi gửi về số điện thoại mà bạn đã đăng ký . Vui
          lòng kiểm tra và điền mã OTP để lấy lại mật khẩu
        </Text>
        <TextInput style={styles.code} value={code} onChangeText={text => setCode(text)} />
      </View>
      <View style={styles.body}>
        <Button title="Confirm Code" onPress={() => confirmCode()} />
      </View>
    </View>
  );
};

export default ForgetPass;
