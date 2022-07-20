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
const AddBank = ({navigation}) => {
  const [nameCustomer, setNameCustomer] = React.useState('');
  const [numberBank, setNumberBank] = React.useState('');
  const [nameBank, setNameBank] = React.useState('');
  const [branch, setBranch] = React.useState('');
  const [check, setCheck] = React.useState(false);
  const [defaulted, setDefaulted] = React.useState(0);
  const addAccBank = async () => {
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
      const [res] = await Promise.all([
        REQUEST_API({
          url: API.add_bank(),
          method: 'POST',
          data: formData,
        }),
      ]);
      if (res.status === true) {
        Alert.alert('Đã thêm tài khoản thành công');
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
  console.log('defaulted', defaulted);
  return (
    <View style={styles.container}>
      <Header
        title="Thêm tài khoản ngân hàng"
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
        <Button title="Hoàn Thành" onPress={addAccBank} />
      </View>
    </View>
  );
};

export default AddBank;
