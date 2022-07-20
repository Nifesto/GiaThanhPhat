import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {View, Image, FlatList, Text, TouchableOpacity} from 'react-native';
import API from '../../api';
import {REQUEST_API} from '../../api/method';
import Images from '../../assets';
import {WIDTH} from '../../base/core';
import Button from '../../component/button';
import Header from '../../component/header';
import styles from './style';
const Address = ({navigation}) => {
  const [data, setData] = React.useState([]);
  const [check, setCheck] = React.useState('');
  const address = async () => {
    try {
      const [res] = await Promise.all([
        REQUEST_API({
          url: API.address(),
          method: 'get',
        }),
      ]);
      if (res.status === true) {
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      address();
    }, []),
  );
  console.log('data', data);
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.containerItem}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {(() => {
            switch (item.type_id) {
              case 0:
                return (
                  <View style={styles.header_flt}>
                    <Image style={styles.icon} source={Images.iconHome} />
                    <Text style={styles.home}> Nhà riêng</Text>
                  </View>
                );
              case 2:
                return (
                  <View style={styles.header_flt}>
                    <Image style={styles.icon} source={Images.iconBookmark} />
                    <Text style={styles.home}> Khác</Text>
                  </View>
                );
              case 1:
                return (
                  <View style={styles.header_flt}>
                    <Image style={styles.icon} source={Images.iconBuilding} />
                    <Text style={styles.home}>Công ty</Text>
                  </View>
                );
              default:
                return null;
            }
          })()}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditAddress', {item: item});
            }}>
            <Text
              style={
                item.is_default === 1 ? styles.defaultTrue : styles.defaultFalse
              }
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {item.is_default === 1 ? 'Mặc định' : 'Sửa'}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.full_address}>{item.full_address}</Text>
        <View style={{flexDirection: 'row', paddingLeft: WIDTH * 46}}>
          <Text style={{...styles.infor, marginRight: WIDTH * 16}}>
            {item.name}
          </Text>
          <Text style={styles.infor}> {item.phone}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header title="Địa chỉ nhận hàng" onPress={() => navigation.goBack()} />
      <View style={styles.line} />
      <View style={styles.main}>
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.line} />}
        />
      </View>
      <View style={styles.footer}>
        <Button title="Thêm địa chỉ" onPress={()=> navigation.navigate('AddAddress')} />
      </View>
    </View>
  );
};

export default Address;
