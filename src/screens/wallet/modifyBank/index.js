import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import API from '../../../api';
import {REQUEST_API} from '../../../api/method';
import Images from '../../../assets';
import {WIDTH} from '../../../base/core';
import Button from '../../../component/button';
import Header from '../../../component/header';
import InputAuth from '../../../component/inputAuth';
import styles from './style';
const ModifyBank = ({navigation, route}) => {
  const items = route.params.item;
  console.log(items);
  const bank_id = route.params.item.id;
  console.log('bank_id', bank_id);
  const [nameCustomer, setNameCustomer] = React.useState(
    items.name_customer_bank,
  );
  const [numberBank, setNumberBank] = React.useState(items.number_bank);
  const [nameBank, setNameBank] = React.useState(items.name_bank);
  const [branch, setBranch] = React.useState(items?.branch_bank);
  const [check, setCheck] = React.useState(false);
  const [defaulted, setDefaulted] = React.useState(items.is_default);
  const editBank = async () => {
    if (!nameCustomer) {
      alert('Vui lòng nhập tên chủ tài khoản');
    } else if (!nameBank) {
      alert('Vui lòng nhập tên ngân hàng');
    } else if (!numberBank) {
      alert('Vui lòng nhập số tài khoản ngân hàng');
    } else {
      let formData = new FormData();
      formData.append('name_bank', nameBank);
      formData.append('name_customer_bank', nameCustomer);
      formData.append('number_bank', numberBank);
      formData.append('branch_bank', branch);
      formData.append('is_default', defaulted);
      formData.append('bank_id', bank_id);

      const [res] = await Promise.all([
        REQUEST_API({
          url: API.editBank(),
          method: 'POST',
          data: formData,
        }),
      ]);
      if (res.status === true) {
        Alert.alert('Đã sửa  tài khoản thành công');
        console.log(res.data);
        navigation.navigate('ListBanks');
      } else {
        Alert.alert(res.msg);
      }
    }
  };
  const onCheck = () => {
    if (check == false) {
      setDefaulted(1);
    } else {
      setDefaulted(0);
    }
  };
  const delBank = async () => {
    let formData = new FormData();
    formData.append('bank_id', bank_id);
    console.log('del', formData);
    const [res] = await Promise.all([
      REQUEST_API({
        url: API.delBank(),
        method: 'POST',
      }),
    ]);
    if (res.status === true) {
      Alert.alert('Đã xóa tài khoản thành công');
      console.log(res.data);
      navigation.navigate('ListBanks');
    } else {
      Alert.alert(res.msg);
    }
  };
  return (
    <View style={styles.container}>
      <Header
        title="Sửa tài khoản ngân hàng"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.line} />

      <View style={styles.body}>
        <ScrollView>
          <Text style={styles.title}>Thông tin tài khoản ngân hàng</Text>
          <InputAuth
            title="chủ tài khoản"
            value={nameCustomer}
            onChangeText={text => setNameCustomer(text)}
          />
          <InputAuth
            title="Ngân hàng"
            value={nameBank}
            onChangeText={text => setNameBank(text)}
          />
          <InputAuth
            title="Số tài khoản"
            value={numberBank}
            onChangeText={text => setNumberBank(text)}
          />
          <InputAuth
            title="Chi nhánh(nếu có)"
            value={branch}
            onChangeText={text => setBranch(text)}
          />
          <View style={styles.more}>
            <Text style={styles.title_more}>Đặt làm địa chỉ mặc định</Text>
            <TouchableOpacity
              onPress={() => {
                setCheck(!check), onCheck();
              }}>
              <Image
                style={styles.icon}
                source={
                  check === false ? Images.iconSwitchOff : Images.iconSwitch
                }
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={{marginHorizontal: WIDTH * 17, marginBottom: WIDTH * 24}}>
        <Button title="lưu" onPress={editBank} />
        <TouchableOpacity style={styles.btn} onPress={delBank}>
          <Text style={styles.btnText}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModifyBank;
