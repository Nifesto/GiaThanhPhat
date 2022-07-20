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
import API from '../../../api';
import axios from 'axios';
const Register = ({navigation}) => {
  const [phone, setPhone] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [user, setUser] = React.useState('');

  const link = API.register();
  const api = async () => {
    let formData = new FormData();
    formData.append('phone', phone);
    formData.append('password', pass);
    formData.append('username', user);
    formData.append('fcm_token', '123');
    const res = await axios({
      method: 'post',
      url: link,
      data: formData,
    });
    console.log(res.data.msg);
    if (res.data.status === true) {
      navigation.navigate('Login');
    } else {
      Alert.alert(res.data.msg);
    }
  };
  return (
    <View style={styles.container}>
      <HeaderAuth title="Đăng ký" />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.body_input}>
            <View style={styles.top}>
              <Text style={styles.title}>Họ và tên</Text>
              <Text style={{...styles.title, color: '#FB4E4E'}}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={text => setUser(text)}
              value={user}
              placeholder=""
            />
          </View>
          <View style={styles.body_input}>
            <View style={styles.top}>
              <Text style={styles.title}>Số điện thoại</Text>
              <Text style={{...styles.title, color: '#FB4E4E'}}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={text => setPhone(text)}
              value={phone}
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
              onChangeText={text => setPass(text)}
              value={pass}
              placeholder=""
            />
          </View>
          {/* <InputAuth
            title="Xác nhập mật khẩu"
            value={pass}
            onChangText={text => setPass(text)}
          /> */}
          <Button title="Đăng Ký" onPress={() => api()} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.Ft_text}>Bạn đã có tài khoản? </Text>
          <TouchableOpacity>
            <Text style={{...styles.Ft_text, color: COLOR.MAIN}}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
