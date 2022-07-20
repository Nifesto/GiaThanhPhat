import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from './style';
import Images from '../../../assets';
import Header from '../../../component/header';
import {WIDTH} from '../../../base/core';
import API from '../../../api';
import {REQUEST_API} from '../../../api/method';
import {useFocusEffect} from '@react-navigation/native';
const Button = ({title, icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.nameButton}>{title}</Text>
    </TouchableOpacity>
  );
};
const renderItem = ({item, index}) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.leftItem}>
        <Image source={Images.iconPurchase} style={styles.iconItem} />
        <View style={{flex: 1}}>
          <Text style={styles.namePurchase} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.date} numberOfLines={1}>
            {item.created_at}
          </Text>
        </View>
      </View>
      <View style={styles.rightItem}>
        <Text style={styles.money} numberOfLines={1}>
          {item.money}
        </Text>
        <Text style={styles.status} numberOfLines={1}>
          {item.status_name}
        </Text>
      </View>
    </View>
  );
};

const HomeWallet = ({navigation}) => {
  const [page, setPage] = React.useState(1);
  const [last_page, setLast_page] = React.useState(1);
  const Money = async () => {
    try {
      const [res] = await Promise.all([
        REQUEST_API({
          url: API.wallet(),
          method: 'get',
        }),
      ]);
      if (res.status === true) {
        setMoney(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      Money(), History();
    }, []),
  );
  const [money, setMoney] = React.useState([]);
  const [data, setData] = React.useState([]);
  console.log(money);
  const History = async () => {
    const [res] = await Promise.all([
      REQUEST_API({
        url: API.history(),
        method: 'post',
      }),
    ]);
    if (res.status === true) {
      setData(res.data.data);
      setLast_page(res.data.last_page);
    }
  };
  const loadMore = async () => {
    if (page >= last_page) {
      return;
    } else {
      const current_page = page + 1;
      const [res] = await Promise.all([
        REQUEST_API({
          url: API.history(current_page),
          method: 'post',
        }),
      ]);
      if (res.status === true) {
        setData(...data.concat(res.data.data));
      }
    }
  };
  return (
    <View style={styles.container}>
      <Header title={'Ví điện tử'} onPress={() => navigation.goBack()} />
      <View style={styles.line} />
      <View style={styles.main}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.lineItem} />}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={loadMore}
          ListHeaderComponent={() => {
            return (
              <>
                <ImageBackground
                  source={Images.imgBank}
                  style={styles.backgroundWallet}
                  imageStyle={{borderRadius: WIDTH * 17}}></ImageBackground>
                <View style={styles.containerButton}>
                  <Button
                    title={'Nạp tiền'}
                    icon={Images.iconRecharge}
                    onPress={() => navigation.navigate('RechargeMoney')}
                  />
                  <Button
                    title={'Rút tiền'}
                    icon={Images.iconWithDraw}
                    onPress={() => navigation.navigate('WithdrawMoney')}
                  />
                  <Button
                    title={'Liên kết'}
                    icon={Images.iconLinkBank}
                    onPress={() => navigation.navigate('ListBanks')}
                  />
                </View>
                <View style={styles.wallets}>
                  <Text style={styles.wallet}>Số dư ví</Text>
                  <Text style={styles.moneyWallet}>{money.main_wallet}</Text>
                </View>
                <Text style={styles.title}>Lịch sử giao dịch</Text>
              </>
            );
          }}
        />
      </View>
    </View>
  );
};

export default HomeWallet;
