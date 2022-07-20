import React, {useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import {REQUEST_API} from '../../api/method';
import Images from '../../assets';
import {WIDTH} from '../../base/core';
import Button from '../../component/button';
import Header from '../../component/header';
import InputAuth from '../../component/inputAuth';
import API from '../../api';
import styles from './style';
import Province from './modalProvince';
import District from './modalDistrict';
import Ward from './modalWard';
const AddAddress = ({navigation, route}) => {
  const [nameCustomer, setNameCustomer] = React.useState('');
  const [id_province, setId_province] = React.useState('');
  const [name_province, setName_province] = React.useState('');
  const [id_district, setId_district] = React.useState('');
  const [name_district, setName_district] = React.useState('');
  const [name_ward, setName_ward] = React.useState('');
  const [id_ward, setId_ward] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [check, setCheck] = React.useState(false);
  const [defaulted, setDefaulted] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible_Dis, setModalVisible_Dis] = React.useState(false);
  const [modalVisible_Ward, setModalVisible_Ward] = React.useState(false);
  const [choose, setChoose] = React.useState('-1');
  const [more, setMore] = React.useState([
    {
      name: 'Nhà riêng',
      id: 0,
    },
    {
      name: 'Công ty',
      id: 1,
    },
    {
      name: 'Khác',
      id: 2,
    },
  ]);
  const saveAddress = async () => {
    if (!nameCustomer) {
      alert('Vui lòng nhập tên ');
    } else if (!phone) {
      alert('Vui lòng nhập Số điện thoại');
    } else {
      let formData = new FormData();
      formData.append('name', nameCustomer);
      formData.append('phone', phone);
      formData.append('province_id_ghn', id_province);
      formData.append('district_id_ghn', id_district);
      formData.append('ward_id_ghn', id_ward);
      formData.append('address_detail', address);
      formData.append('type_id', choose);
      formData.append('is_default', defaulted);
      const [res] = await Promise.all([
        REQUEST_API({
          url: API.saveAddress(),
          method: 'POST',
          data: formData,
        }),
      ]);
      if (res.status === true) {
        Alert.alert('đã thêm địa chỉ thành công');
        console.log(res.data);
        navigation.navigate('Address');
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
  const onSetProvinceID = value => {
    setId_province(value);
  };
  const onSetDistrictID = value => {
    setId_district(value);
  };
  const onSetNameProvince = value => {
    setName_province(value);
  };
  const onSetNameDistrict = value => {
    setName_district(value);
  };
  const onSetNameWard = value => {
    setName_ward(value);
  };
  const onSetWardID = value => {
    setId_ward(value);
  };
  const onChangeName = useCallback(text => {
    setNameCustomer(text);
  }, []);
  const onChangePhone = useCallback(text => {
    console.log('phone',text);
    setPhone(text);
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
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  const onPress = (item, index) => {
    if (index !== choose) {
      setChoose(index);
    } else {
      setChoose('-1');
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Thêm địa chỉ" onPress={() => navigation.goBack()} />
      <View style={styles.line} />

      <View style={styles.body}>
        <ScrollView>
          <Text style={styles.title}>Thông tin tài khoản ngân hàng</Text>
          <InputAuth
            title="Tên"
            value={nameCustomer}
            onChangeText={onChangeName}
          />
          <InputAuth
            title="Số điện thoại"
            value={phone}
            onChangeText={onChangePhone}
          />
          <View style={styles.body_input}>
            <View style={styles.top}>
              <Text style={styles.title_modal}>Tỉnh/Thành phố</Text>
              <Text style={{...styles.title_modal, color: '#FB4E4E'}}>*</Text>
            </View>
            <TouchableOpacity
              style={styles.input}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={{...styles.title_modal, flex: 1}}>
                {name_province}
              </Text>
              <Image source={Images.iconPlus} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.body_input}>
            <View style={styles.top}>
              <Text style={styles.title_modal}>Quận/huyện</Text>
              <Text style={{...styles.title_modal, color: '#FB4E4E'}}>*</Text>
            </View>
            <TouchableOpacity
              style={styles.input}
              onPress={() => {
                setModalVisible_Dis(!modalVisible_Dis);
              }}>
              <Text style={{...styles.title_modal, flex: 1}}>
                {name_district}
              </Text>
              <Image source={Images.iconPlus} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.body_input}>
            <View style={styles.top}>
              <Text style={styles.title_modal}>Phường/Xã</Text>
              <Text style={{...styles.title_modal, color: '#FB4E4E'}}>*</Text>
            </View>
            <TouchableOpacity
              style={styles.input}
              onPress={() => {
                setModalVisible_Ward(!modalVisible_Ward);
              }}>
              <Text style={{...styles.title_modal, flex: 1}}>{name_ward}</Text>
              <Image source={Images.iconPlus} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <InputAuth
            title="địa chỉ chi tiết"
            value={address}
            onChangeText={text => setAddress(text)}
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
        <FlatList
          data={more}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
      <View style={{marginHorizontal: WIDTH * 17, marginBottom: WIDTH * 24}}>
        <Button title="lưu" onPress={saveAddress} />
      </View>
      <Province
        show={modalVisible}
        close={() => setModalVisible(!modalVisible)}
        id_province={onSetProvinceID}
        ProvinceName={onSetNameProvince}
      />
      <District
        show={modalVisible_Dis}
        close={() => setModalVisible_Dis(!modalVisible_Dis)}
        id_province={id_province}
        id_district={onSetDistrictID}
        Name_district={onSetNameDistrict}
      />
      <Ward
        show={modalVisible_Ward}
        close={() => setModalVisible_Ward(!modalVisible_Ward)}
        wardName={onSetNameWard}
        District_id={id_district}
        WardCode={onSetWardID}
      />
    </View>
  );
};

export default AddAddress;
