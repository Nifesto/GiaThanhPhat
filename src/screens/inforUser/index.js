import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Header from '../../component/header';
import InputUser from './inputUser';
import styles from './style';
import Images from '../../assets';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const InforUser = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [image, setImage] = React.useState('');

  const onButtonPress = () => {
    const options = {
      storageOptions: {
        path: 'image',
        mediaType: 'photo',
        saveToPhotos: true,
      },
      includeBase64: true,
    };
    launchCamera(options, response => {
      console.log(response?.assets[0].uri);
      if (response?.didCancel) {
        console.log(' Người dùng đã hủy');
      } else if (response.errorMessage) {
        console.log('errorMessage: ', response?.errorMessage);
      } else {
        const Source = {
          uri:response?.assets[0].uri,
        };
        setImage(Source);
      }
    });
  };
  return (
    <View style={styles.container}>
      <Header
        title={' Thông tin cá nhân'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.line} />
      <View style={styles.body}>
        <TouchableOpacity onPress={onButtonPress} style={styles.bntAvatar}>
          <View>
            <Image source={image} style={styles.avatar} />
          </View>
          <View style={styles.viewCamera}>
            <View style={styles.btnCamera}>
              <Image style={styles.iconCamera} source={Images.iconCamera} />
            </View>
          </View>
        </TouchableOpacity>
        <InputUser
          title={'Họ và tên'}
          value={name}
          onChangeText={text => setName(text)}
        />
        <View style={styles.mgb} />
        <InputUser
          title={'Số điện thoại'}
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        <View style={styles.mgb} />
        <InputUser
          title={'Email'}
          value={mail}
          onChangeText={text => setMail(text)}
        />
        <View style={styles.mgb} />
        <InputUser
          title={'Địa chỉ'}
          value={address}
          onChangeText={text => setAddress(text)}
        />
      </View>
    </View>
  );
};

export default InforUser;
