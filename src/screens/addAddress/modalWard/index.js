import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect} from 'react';
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
const Ward = ({show, close, District_id, wardName,WardCode}) => {
  const [data, setData] = React.useState([]);
  const [choose, setChoose] = React.useState('-1');
  const [ward_name, setWard_name] = React.useState('');
  const [ward_id, setWard_id] = React.useState('');
  const onPress = (item, index) => {
    if (index !== choose) {
      setChoose(index);
      setWard_name(item.WardName);
      setWard_id(item.WardCode);
    } else {
      setChoose('-1');
    }
  };
  const ListWard = async () => {
    let formData = new FormData();
    formData.append('district_id', District_id);
    console.log('alo', formData);
    const [res] = await Promise.all([
      REQUEST_API({
        url: API.listWard(),
        method: 'post',
        data: formData,
      }),
    ]);
    if (res.status === true) {
      setData(res.data);
    } else {
      console.log(error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      ListWard();
    }, [District_id]),
  );
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
        <Text style={styles.name}>{item.WardName}</Text>
      </TouchableOpacity>
    );
  };
  const confirm = ({item, index}) => {
    close();
    wardName(ward_name);
    WardCode(ward_id);
  };
  return (
    <Modal animationType="slide" transparent={true} visible={show}>
      <View style={styles.centeredView}>
        <Header title="Danh sách Phường xã" onPress={close} />
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

export default Ward;
