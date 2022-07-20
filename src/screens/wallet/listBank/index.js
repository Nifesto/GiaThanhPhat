import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import API from '../../../api';
import { REQUEST_API } from '../../../api/method';
import Images from '../../../assets';
import {WIDTH} from '../../../base/core';
import Header from '../../../component/header';
import styles from './style';
const ListBanks = ({navigation}) => {
  const setListBanks = async () => {
    try {
      const [res] = await Promise.all([
        REQUEST_API({
          url: API.listBanks(),
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
      setListBanks();
    }, []),
  );
  const [data, setData] = React.useState([]);
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.containerItem}>
        <View style={styles.modify}>
          <Text style={styles.text} numberOfLines={1} ellipsizeMode={'tail'}>
            Ngân hàng: <Text style={{fontWeight: '600'}}>{item.name_bank}</Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ModifyBank', {item});
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

        <Text style={styles.text} numberOfLines={1} ellipsizeMode={'tail'}>
          Chủ tài khoản:{' '}
          <Text style={{fontWeight: '600'}}>{item.name_customer_bank}</Text>
        </Text>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode={'tail'}>
          Số tài khoản:{' '}
          <Text style={{fontWeight: '600'}}>{item.number_bank}</Text>
        </Text>
      </View>
    );
  };

  const footer = () => {
    return (
      <>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => {
            navigation.navigate('AddBank');
          }}>
          <Image source={Images.iconPlus} style={styles.iconPlus} />
          <Text style={styles.text}>Thêm tài khoản ngân hàng</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title={'Tài khoản ngân hàng'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.line} />
      <View style={styles.main}>
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          ListFooterComponent={footer}
          ItemSeparatorComponent={() => <View style={styles.line} />}
        />
      </View>
    </View>
  );
};

export default ListBanks;
