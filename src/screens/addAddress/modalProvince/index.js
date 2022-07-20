import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import API from '../../../api';
import {REQUEST_API} from '../../../api/method';
import Images from '../../../assets';
import {
  COLOR,
  FONTSIZE,
  FONT_FAMILY,
  WIDTH,
  WIDTH_WINDOW,
} from '../../../base/core';
import Button from '../../../component/button';
import Header from '../../../component/header';

const Province = ({show, close, id_province, ProvinceName}) => {
  const [data, setData] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState();
  const [choose, setChoose] = React.useState('-1');
  const [provinceID, SetProvinceID] = React.useState('');
  const [provinceName, setProvinceName] = React.useState('');
  const onPress = (item, index) => {
    if (index !== choose) {
      setChoose(index);
      SetProvinceID(item.ProvinceID);
      setProvinceName(item.ProvinceName);
    } else {
      setChoose('-1');
    }
  };
  const ListProvince = async () => {
    try {
      const [res] = await Promise.all([
        REQUEST_API({
          url: API.listProvince(),
          method: 'GET',
        }),
      ]);
      if (res.status === true) {
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    ListProvince();
  }, []);
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPress(item, index)}>
        <Image
          style={styles.iconCheck}
          source={
            index === choose ? Images.iconRadioCheck : Images.iconRadioUnCheck
          }
        />
        <Text style={styles.name}>{item.ProvinceName}</Text>
      </TouchableOpacity>
    );
  };
  const confirm = ({item, index}) => {
    id_province(provinceID);
    close();
    ProvinceName(provinceName);
  };
  return (
    <Modal animationType="slide" transparent={true} visible={show}>
      <View style={styles.centeredView}>
        <Header title="Danh sách tỉnh thành" onPress={close} />
        <View style={styles.line} />
        <View style={styles.main}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
        <View style={{alignItems: 'center', paddingVertical: WIDTH * 12}}>
          <Button title="Tiếp tục" onPress={confirm} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: COLOR.WHITE_P,
  },
  title: {
    marginBottom: WIDTH * 14,
    fontSize: FONTSIZE.f_18,
    fontFamily: FONT_FAMILY.bold,
    color: COLOR.BLACK_P,
    marginTop: WIDTH * 24,
    marginHorizontal: WIDTH * 17,
  },
  line: {
    width: WIDTH_WINDOW,
    height: WIDTH * 8,
    backgroundColor: '#E5E5E5',
  },
  iconCheck: {
    width: WIDTH * 20,
    height: WIDTH * 20,
    resizeMode: 'contain',
    marginRight: WIDTH * 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WIDTH * 17,
    paddingVertical: WIDTH * 17,
  },
  name: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONTSIZE.f_16,
    color: COLOR.BLACK_P,
  },
  main: {
    flex: 1,
  },
});

export default Province;
