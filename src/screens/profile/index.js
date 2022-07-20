import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Images from '../../assets';
import styles from './style';
import API from '../../api';
import { REQUEST_API } from '../../api/method';
const Profile = ({navigation}) => {
  const Item = ({iconLeft, content, onPress}) => {
    return (
      <TouchableOpacity style={styles.containerItem} onPress={onPress}>
        <Image source={iconLeft} style={styles.iconHeader} />
        <Text style={styles.textContent}>{content}</Text>
        <Image source={Images.iconArrowRight} style={styles.iconArrowRight} />
      </TouchableOpacity>
    );
  };
  const logout = async () => {
    const [res] = await Promise.all([
      REQUEST_API({
        url: API.logout(),
        method: 'POST',
      }),
    ]);
    if (res.status === true) {
      navigation.navigate('Login');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.goBack()}>
          <Image style={styles.iconArrowLeft} source={Images.iconArrowLeft} />
        </TouchableOpacity>
        <Text style={styles.title}>Tài Khoản</Text>
        <TouchableOpacity onPress={logout} style={styles.btn}>
          <Image style={styles.iconHeader} source={Images.iconLogout} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.btnFirst}
          onPress={() => navigation.navigate('InforUser')}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={Images.iconAvatar} style={styles.avatar} />
            <View style={styles.viewName}>
              <Text style={styles.hello}>xin chào</Text>
              <Text style={styles.name}>User</Text>
            </View>
          </View>
          <Image source={Images.iconArrowRight} style={styles.iconArrowRight} />
        </TouchableOpacity>
        <View style={styles.mgb} />
        <Item
          iconLeft={Images.iconLocation}
          content={'Địa chỉ nhận hàng'}
          onPress={() => navigation.navigate('Address')}
        />
        <View style={styles.mgb} />
        <Item
          iconLeft={Images.iconWallet}
          content={'Ví điện tử'}
          onPress={() => navigation.navigate('HomeWallet')}
        />
        <View style={styles.mgb} />
        <Item
          iconLeft={Images.iconBag}
          content={'Theo dõi đơn hàng'}
          onPress={() => navigation.navigate('MyOrder')}
        />
        <View style={styles.mgb} />
        <Item
          iconLeft={Images.iconPaper}
          content={'Điều khoản '}
          onPress={() => navigation.navigate('Rules')}
        />
        <View style={styles.mgb} />
      </View>
    </View>
  );
};

export default Profile;
