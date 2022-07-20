import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import Header from '../../component/header';
import Images from '../../assets';
import API, {baseUrl} from '../../api';
import {REQUEST_API} from '../../api/method';
import axios from 'axios';
import {COLOR, WIDTH} from '../../base/core';
import Button from '../../component/button';
import {useFocusEffect} from '@react-navigation/native';
const Cart = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [prd_id, setPrd_id] = useState('');
  const Add_prd = API.add_cart();
  const Cur_prd = API.cart();
  const [choose, setChoose] = React.useState('');
  const cart = async () => {
    try {
      const [res] = await Promise.all([
        REQUEST_API({
          url: Cur_prd,
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
      cart();
    }, []),
  );
  const totalMoney = () => {
    let a = [...data];
    let money = 0;
    a.map(item => {
      return (money = money + item.total_money);
    });
    return money;
  };

  const decrease = async (item, index) => {
    if (item !== choose) {
      let formData = new FormData();
      formData.append('product_id', item.product_id);
      formData.append('product_pack_id', 1);
      formData.append('product_packaging_id', item.product_packaging_id);
      formData.append('quantity', 1);
      formData.append('type', 0);
      const [res] = await Promise.all([
        REQUEST_API({
          url: Add_prd,
          method: 'post',
          data: formData,
        }),
      ]);
      if (res.status === true) {
        setData(res.data);
      } else {
        Alert.alert(res.msg);
      }
    }
  };

  const increase = async (item, index) => {
    if (item !== choose) {
      let formData = new FormData();
      formData.append('product_id', item.product_id);
      formData.append('product_pack_id', 1);
      formData.append('product_packaging_id', item.product_packaging_id);
      formData.append('quantity', 1);
      formData.append('type', 1);
      const [res] = await Promise.all([
        REQUEST_API({
          url: Add_prd,
          method: 'post',
          data: formData,
        }),
      ]);
      if (res.status === true) {
        setData(res.data);
      } else {
        Alert.alert(res.msg);
      }
    }
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.containerItem}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Image
            style={styles.imageProduct}
            source={{
              uri: `http://103.226.249.30:8004/${item.data_product.image_cover}`,
            }}
          />
          <View style={{justifyContent: 'space-between'}}>
            <Text style={styles.brand}>Gia Thành</Text>
            <Text style={styles.name_prd}>{item.data_product.name}</Text>
            <Text style={styles.price}>{item.total_money}</Text>
            <Text style={styles.pack}>
              Khối lượng(gram): {item.data_product_pack.weight}
            </Text>
            <Text style={styles.pack}>
              Hộp đựng: {item.data_product_pack.name} {}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: WIDTH * 10,
          }}>
          <TouchableOpacity onPress={() => increase(item, index)}>
            <Image style={styles.icon} source={Images.iconAddProduct} />
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => decrease(item, index)}>
            <Image style={styles.icon} source={Images.iconSubtraction} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header title={'GIỎ HÀNG'} onPress={() => navigation.goBack()} />
      <View style={styles.line} />
      <View style={styles.main}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.footer_view}>
          <Text style={styles.text_footer}>Tổng tiền : </Text>
          <Text style={styles.text_footer}> {totalMoney()}</Text>
        </View>
        <View style={styles.footer_view}>
          <Text style={styles.text_footer}>Phí vẫn chuyển :</Text>
          <Text style={styles.text_footer}> 30000</Text>
        </View>
        <View style={styles.footer_view}>
          <Text style={styles.text_footer}>Tổng giá trị đơn hàng :</Text>
          <Text style={{...styles.text_footer, color: COLOR.MAIN}}>
            {totalMoney() + 30000}
          </Text>
        </View>

        <Button
          title="Thanh Toán"
          onPress={() => navigation.navigate('Pay', {money: totalMoney()})}
        />
      </View>
    </View>
  );
};

export default Cart;
