import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style';
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
const ConfirmOTP = ({navigation}) => {
  const [acc, setAcc] = React.useState('');
  return (
    <View style={styles.container}>
      <HeaderAuth title="Nhập mã OTP" />
      <View style={styles.header}>
        <Text style={styles.textOTP}>
          Mã OTP được chúng tôi gửi về số điện thoại mà bạn đã đăng ký . Vui
          lòng kiểm tra và điền mã OTP để lấy lại mật khẩu
        </Text>
      </View>
      <View style={styles.body}>
        <Button title="Xác nhận" onPress={()=>navigation.navigate('ConfirmPassword')} />
      </View>
    </View>
  );
};

export default ConfirmOTP;
