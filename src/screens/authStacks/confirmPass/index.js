import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
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
const ConfirmPassword = ({navigation}) => {
  const [acc, setAcc] = React.useState('');
  return (
    <View style={styles.container}>
      <HeaderAuth title="Thiết lập mật khẩu mới" />
      <ScrollView>
        <View style={styles.body}>
          <InputAuth title="Mật khẩu mới" />
          <InputAuth title="Nhập lại mật khẩu" />
          <Button title="Gửi đi" onPress={() => navigation.navigate('Login')} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ConfirmPassword;
