import {
  Image,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import Images from '../../assets';
import {COLOR, WIDTH, WIDTH_WINDOW} from '../../base/core';
import API from '../../api';
import axios from 'axios';
const Home = ({navigation, route}) => {
  const [data, setData] = React.useState([]);
  const [first, setFirst] = React.useState('');
  const [children, setChildren] = React.useState([]);
  const [text, setText] = React.useState('');
  const [choose, setChoose] = React.useState(0);
  const refScroll = React.useRef(null);
  const link = API.category();
  const api = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: link,
      });
      setData(res.data);
      setFirst(res.data.data[0].id);
    } catch (error) {
      console.log(error);
    }
  };
  const getListChildren = API.getListChildren();
  const api2 = async () => {
    let formData = new FormData();
    formData.append('category_id', first);
    const res = await axios({
      method: 'post',
      url: getListChildren,
      data: formData,
    });
    if (res.data.status === true) {
      setChildren(res.data.data);
    }
  };
  useEffect(() => {
    api2();
  }, [first]);
  useEffect(() => {
    api();
  }, []);

  const api3 = async item => {
    let formData = new FormData();
    formData.append('category_id', item.id);
    const res = await axios({
      method: 'post',
      url: getListChildren,
      data: formData,
    });
    if (res.data.status === true) {
      setChildren(res.data.data);
    }
  };
  const onPress = (item, index) => {
    setChoose(index);
    refScroll?.current?.scrollTo({
      x: WIDTH_WINDOW * index,
      y: 0,
      animate: true,
    });
  };
  const renderItem = (item, index) => {
    return (
      <View key={index}>
        <View style={styles.title}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.category_name}>
              <Text style={styles.name}>{item.item.name}</Text>
            </View>
            <View style={styles.category_extra}>
              <View style={styles.category_extra1}></View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AllProducts', {
                id: item.item.id,
                parent_id: item.item.parent_id,
                name: item.item.name,
                parent_id1: item.item.id,
              })
            }>
            <Text style={styles.more}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: WIDTH * 16,
            marginTop: WIDTH * 13,
          }}>
          {item.item.products.data.map((items, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DetailProducts', {
                    id: items.id,
                    parent_id: item.item.id,
                  })
                }
                key={index}
                style={styles.products}>
                <Image
                  style={styles.image}
                  source={{
                    uri: `http://103.226.249.30:8004/${items.image_cover}`,
                  }}
                />
                <View
                  style={{
                    marginHorizontal: WIDTH * 6,
                    marginVertical: WIDTH * 6,
                  }}>
                  <Text style={styles.prd_name}>{items.name}</Text>
                  <Text style={styles.prd_price}>{items.price}</Text>
                  <Text style={styles.prd_origin}>{items.origin}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Image source={Images.iconSearch} style={styles.iconSearch} />
          <TextInput
            style={styles.Search_input}
            onChangeText={text => setText(text)}
            value={text}
            placeholder="Search"
            placeholderTextColor={'#000000'}
          />
        </View>
        <TouchableOpacity
          style={styles.Cart}
          onPress={() => navigation.navigate('Cart')}>
          <Image source={Images.iconCart} style={styles.iconCart} />
          <View style={styles.quantity}>
            <Text style={styles.text}>9</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <View style={styles.category}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {!!data?.data &&
              !!data?.data.length &&
              data.data.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      onPress(item, index), api3(item, index);
                    }}
                    style={{
                      ...styles.button,
                      borderBottomWidth: index === choose ? 3 : 0,
                      borderColor: index === choose ? COLOR.MAIN : null,
                    }}>
                    <Text
                      style={{
                        ...styles.btn_text,
                        color: index === choose ? COLOR.MAIN : '#9A9A9D',
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={children}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
