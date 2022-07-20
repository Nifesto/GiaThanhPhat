import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
  Modal,
  ImageBackground,
} from 'react-native';
import API from '../../api';
import Images from '../../assets';
import {COLOR, WIDTH} from '../../base/core';
import Header from '../../component/header';
import styles from './style';
import FilterProduct from './filterProduct';
import {useFocusEffect} from '@react-navigation/native';
const AllProducts = ({navigation, route}) => {
  const [low, setLow] = React.useState();
  const [high, setHigh] = React.useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [choose, setChoose] = React.useState('-1');
  const [id, setId] = React.useState(route.params.id);
  const parent = route.params.parent_id;
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(1);
  const [name, setName] = React.useState(route.params.name);
  const [children, setChildren] = React.useState([]);
  const [data, setData] = React.useState([]);
  const showAllPrd = API.allPrd();
  const api2 = async () => {
    let formData = new FormData();
    formData.append('category_id', id);
    const res = await axios({
      method: 'post',
      url: showAllPrd,
      data: formData,
    });
    if (res.data.status === true) {
      setData(res.data.data.data);
      setLastPage(res.data.data.last_page);
    }
  };
  const api3 = async () => {
    let formData = new FormData();
    formData.append('min_price', low);
    formData.append('max_price', high);
    formData.append('category_id', id);
    const res = await axios({
      method: 'post',
      url: API.filterProduct(),
      data: formData,
    });
    if (res.data.status === true) {
      setData(res.data.data.data);
    }
  };
  const onConfirm = () => {
    api3();
  };
  React.useEffect(() => {
    api2();
  }, []);
  const onPress = (item, index) => {
    if (index !== choose) {
      setChoose(index);
      setSId_filter(item.id);
    } else {
      setChoose('-1');
    }
  };
  const loadMore = async () => {
    if (page >= lastPage) {
      return;
    } else {
      const current_page = page + 1;
      let formData = new FormData();
      formData.append('min_price', low);
      formData.append('max_price', high);
      formData.append('category_id', id);
      const res = await axios({
        method: 'post',
        url: API.filterProduct(current_page),
        data: formData,
      });
      if (res.data.status === true) {
        setData(...data.concat(res.data.data.data));
      }
    }
  };
  const renderItems = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.products}
        onPress={() =>
          navigation.navigate('DetailProducts', {
            id: item.id,
          })
        }>
        <Image
          style={styles.image}
          source={{
            uri: `http://103.226.249.30:8004/${item.image_cover}`,
          }}
        />
        <View
          style={{
            marginHorizontal: WIDTH * 6,
            marginVertical: WIDTH * 6,
          }}>
          <Text style={styles.prd_name}>{item.name}</Text>
          <Text style={styles.prd_price}>{item.price}</Text>
          <Text style={styles.prd_origin}>{item.origin}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const onSetLow = value => {
    setLow(value);
  };
  const onSetHigh = value => {
    setHigh(value);
  };
  const onfilter_id = value => {
    setId(value);
  };
  return (

    <View style={styles.container}>
      <Header title={name} onPress={() => navigation.goBack()} />
      <View style={styles.line} />
      <View style={styles.header}>
        <View style={styles.header_left}>
          <Text style={styles.allPrd_text}>Tất cả sản phẩm</Text>
          <View style={styles.header_right}>
            <Text style={styles.filter_Text}>Bộ lọc</Text>
            <View style={styles.iconFilter}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Image style={styles.iconFilter} source={Images.iconFilter} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          data={data}
          renderItem={renderItems}
          keyExtractor={(item, index) => index.toString()}
          horizontal={false}
          numColumns={3}
          onEndReachedThreshold={0.5}
          onEndReached={loadMore}
        />
      </View>
      <View>
        <FilterProduct
          show={modalVisible}
          id={id}
          parent_id={parent}
          close={() => setModalVisible(!modalVisible)}
          setPriceMaxChoose={onSetHigh}
          setPriceMinChoose={onSetLow}
          filter_id={onfilter_id}
          onConfirm={onConfirm}
        />
      </View>
    </View>
  );
};
export default AllProducts;
