import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import Header from '../../component/header';
import Images from '../../assets';
import {REQUEST_API} from '../../api/method';
import API from '../../api';
import {useFocusEffect} from '@react-navigation/native';
import {get} from 'immer/dist/internal';
const Notify = ({navigation}) => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(1);
  const renderItem = (item, index) => {
    return (
      <View key={index} style={styles.flt}>
        <Image style={styles.icon} source={item.icon} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <View>
            <Text style={styles.date}> {item.date}</Text>
            <Text style={styles.date}> {item.time}</Text>
          </View>
        </View>
      </View>
    );
  };
  const getNotify = async () => {
    try {
      const [res] = await Promise.all([
        REQUEST_API({
          url: API.notify(),
          method: 'get',
        }),
      ]);
      if (res.status === true) {
        setData(res.data);
        setLastPage(res.data.last_page);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      getNotify();
    }),
  );
  const loadMore = async () => {
    if (page >= lastPage) {
      return;
    } else {
      const current_page = page + 1;
      const [res] = await Promise.all([
        REQUEST_API({
          url: API.notify(current_page),
          method: 'post',
        }),
      ]);
      if (res.status === true) {
        setData(...data.concat(res.data));
      }
    }
  };
  return (
    <View style={styles.container}>
      <Header
        title=" Thông báo"
        onPress={() => navigation.goBack()}
        img={Images.iconDone}
      />
      <View style={styles.line} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
      />
    </View>
  );
};

export default Notify;
