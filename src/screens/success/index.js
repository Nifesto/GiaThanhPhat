import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Images from '../../assets';
import Button from '../../component/button';
import styles from './style';
const Successful = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.iconDone} source={Images.purchaseSuccess} />
      <Text style={styles.text}>Chúc mừng bạn đã đặt hàng thành công</Text>
      <Button title="Trang Chủ" onPress={() => navigation.navigate('Home')} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Quản lý đơn hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Successful;
