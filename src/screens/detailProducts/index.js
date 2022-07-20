import axios from 'axios';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import API from '../../api';
import styles from './style';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {COLOR, WIDTH, FONT_FAMILY} from '../../base/core';
import Images from '../../assets';
import RenderHtml from 'react-native-render-html';
import {REQUEST_API} from '../../api/method';
const DetailProducts = ({navigation, route}) => {
  const parent_id = route.params.parent_id;
  const id = route.params.id;
  const [mass, setMass] = React.useState(1);
  const [choose, setChoose] = React.useState('-1');
  const [pack, setPack] = React.useState('-1');
  const [pack_id, setPack_id] = React.useState('');
  const Add_prd = API.add_cart();
  const [gram, setGram] = React.useState([
    {nameGram: '100'},
    {nameGram: '200'},
    {nameGram: '300'},
    {nameGram: '400'},
    {nameGram: '500'},
  ]);
  const onPress = (item, index) => {
    if (index !== choose) {
      setChoose(index);
      setMass(item.nameGram);
    } else {
      setChoose(-1);
    }
  };
  const onPressPack = (item, index) => {
    if (index !== pack) {
      setPack(index);
      setPack_id(item.id);
    } else {
      setPack('-1');
    }
  };
  const [data, setData] = React.useState([]);
  const [data1, setData1] = React.useState([]);
  const detailProduct = API.detailProduct();
  const api2 = async () => {
    let formData = new FormData();
    formData.append('product_id', id);
    const res = await axios({
      method: 'post',
      url: detailProduct,
      data: formData,
    });
    if (res.data.status === true) {
      setData(res.data.data_product);
    } else {
      Alert.alert(res.msg);
    }
  };
  const showAllPrd = API.allPrd();
  const api1 = async () => {
    let formData = new FormData();
    formData.append('category_id', parent_id);
    const res = await axios({
      method: 'post',
      url: showAllPrd,
      data: formData,
    });
    if (res.status === true) {
      setData1(res.data);
    }
  };
  useEffect(() => {
    api1();
  }, []);
  useEffect(() => {
    let controller = new AbortController();
    api2();
    return () => controller?.abort();
  }, []);

  const Confirm = async () => {
    let formData = new FormData();
    formData.append('product_id', id);
    formData.append('product_pack_id', 1);
    formData.append('product_packaging_id', pack_id);
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
      Alert.alert('đã thêm sản phẩm vào giỏ hàng');
    } else {
      Alert.alert(res.msg);
    }
  };
  const Confirm1 = () => {
    navigation.navigate('Cart');
  };
  const source = data.desc;
  const renderItems = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.products}>
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

  return (
    <View style={styles.container}>
      <ScrollView style={{backgroundColor: COLOR.WHITE_P}}>
        <View>
          <SwiperFlatList
            autoplay={true}
            autoplayDelay={2}
            autoplayLoop={true}
            autoplayInvertDirection={true}
            index={2}
            showPagination
            data={data.image_cover}
            renderItem={() => (
              <View style={styles.slide}>
                <Image
                  style={styles.img}
                  source={{
                    uri: `http://103.226.249.30:8004/${data.image_cover}`,
                  }}
                />
              </View>
            )}
            paginationStyle={styles.dots}
            paginationStyleItemInactive={styles.dot}
            paginationStyleItemActive={styles.dot1}
          />
          <View style={styles.header}>
            <Text style={styles.name}>{data.name}</Text>
            <View style={styles.price}>
              <Text style={styles.brand}>Gia Thành</Text>
              <Text style={styles.priceText}>{data.price * mass}</Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.desc}>
            <Text style={styles.title}>Mô tả sản phẩm</Text>
            <Text style={styles.desc_content}>Chi tiết:</Text>
            <Text style={styles.desc_content}>{data.desc}</Text>
          </View>
          <View style={styles.mass}>
            <Text style={styles.title}>Khối lượng(gram)</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {gram.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{
                      ...styles.btnSize,
                      backgroundColor:
                        index === choose ? '#FA4A0C' : COLOR.WHITE_P,
                      borderColor: 'red',
                    }}
                    key={index}
                    onPress={() => onPress(item, index)}>
                    <Text
                      style={{
                        ...styles.txtSize,
                        color: index === choose ? COLOR.WHITE_P : COLOR.BLACK_P,
                      }}>
                      {item.nameGram}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.pack}>
            <Text style={styles.title}>Hộp dựng</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {!!data?.pack &&
                !!data?.pack.length &&
                data?.pack.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={{
                        ...styles.btn,
                        borderColor: index === pack ? COLOR.MAIN : null,
                        borderWidth: index === pack ? 1 : null,
                      }}
                      key={index}
                      onPress={() => onPressPack(item, index)}>
                      <Image
                        style={{
                          width: WIDTH * 115,
                          height: WIDTH * 115,
                          resizeMode: 'contain',
                          borderRadius: WIDTH * 10,
                        }}
                        source={{
                          uri: `http://103.226.249.30:8004/${item.image}`,
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
            </ScrollView>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginHorizontal: WIDTH * 17,
            }}>
            <View style={styles.category_name}>
              <Text style={styles.nameText}>Sản phẩm tương tự</Text>
            </View>
            <View style={styles.category_extra}>
              <View style={styles.category_extra1}></View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => Confirm()}>
          <Image source={Images.iconAddCart} style={styles.iconAddCart} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn_buy}
          onPress={() => {
            Confirm(), Confirm1();
          }}>
          <Text style={styles.text_buy}>Mua Ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailProducts;
