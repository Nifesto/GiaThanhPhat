import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLOR, WIDTH} from '../../../base/core';
import Header from '../../../component/header';
import styles from './style';
import Images from '../../../assets';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';
const ReceiptMoney = ({navigation, route}) => {
  const [image, setImage] = React.useState('');

  const onButtonPress = () => {
    const options = {
      storageOptions: {
        path: 'image',
        mediaType: 'photo',
      },
    };
    launchImageLibrary(options, response => {
      console.log(response.assets[0].uri);
      if (response.didCancel) {
        console.log(' Người dùng đã hủy');
      } else if (response.errorMessage) {
        console.log('errorMessage: ', response.errorMessage);
      } else {
        const Source = {uri: response.assets[0].uri};
        setImage(Source);
      }
    });
  };
  
  const money = route.params.money;
  return (
    <View style={styles.container}>
      <Header
        title="Biên lai nhận tiền"
        onPress={() => navigation.goBack()}
        s
      />
      <View style={styles.line} />
      <View style={styles.main}>
        <Text style={styles.title}>THÔNG TIN CHUYỂN KHOẢN</Text>
        <View style={styles.infor_view}>
          <Text style={styles.content}> Số tiền đã chuyển</Text>
          <Text style={styles.content}>{money}</Text>
        </View>

        <View style={styles.infor_view}>
          <Text style={styles.content}> Tài khoản nhận</Text>
          <Text style={styles.content}> 1900256515525</Text>
        </View>
        <View style={styles.infor_view}>
          <Text style={styles.content}> Ngân hàng nhận</Text>
          <Text style={styles.content}>Vietcombank</Text>
        </View>
        <View style={styles.upload_view}>
          <View style={styles.upload}>
            <Text style={styles.content}>Ảnh chụp giao dịch màn hình</Text>
            <Text style={styles.content}>
              Tải ảnh đúng nội dung chuyển khoản
            </Text>
            <Image
              style={{ width: 200, height: 180, resizeMode: 'contain'}}
              source={image}
            />
          </View>
          <TouchableOpacity onPress={onButtonPress}>
            <Image style={styles.icon} source={Images.iconUp} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('HomeWallet')}>
        <Text style={styles.btn_text}> Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReceiptMoney;
