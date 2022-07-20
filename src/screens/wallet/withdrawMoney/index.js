import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
  Image,
} from 'react-native';
import Images from '../../../assets';
import {FONTSIZE, WIDTH} from '../../../base/core';
import Header from '../../../component/header';
import styles from './style';
const WithdrawMoney = ({navigation}) => {
  const [data] = React.useState([
    {value: '50.000'},
    {value: '100.000'},
    {value: '200.000'},
    {value: '500.000'},
    {value: '800.000'},
    {value: '1.000.000'},
  ]);
  const [money, setMoney] = React.useState('');
  const [check, setCheck] = React.useState(false);
  return (
    <View style={styles.container}>
      <Header
        title=" Rút tiền về tài khoản"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.line} />
      <View style={styles.body}>
        <ScrollView>
          <Text style={styles.title}> Số tiền </Text>
          <View style={styles.containerButton}>
            {!!data &&
              data.length > 0 &&
              data.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.btn}
                    onPress={() => setMoney(item.value)}>
                    <Text style={styles.value}>{item.value}đ</Text>
                  </TouchableOpacity>
                );
              })}
          </View>

          <Text
            style={{
              ...styles.title,
              fontSize: FONTSIZE.f_18,
              marginBottom: WIDTH * 14,
              marginHorizontal: WIDTH * 17,
            }}>
            Số dư ví: 15000000
          </Text>
          <View style={styles.body_input}>
            <View style={styles.top}>
              <Text style={styles.title_input}>Số tiền nạp</Text>
              <Text style={{...styles.title, color: '#FB4E4E'}}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={text => setMoney(text)}
              value={money}
              placeholder=""
            />
          </View>
          <View style={styles.infor}>
            <View style={styles.view_infor}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.title_infor}>Số tài khoản: </Text>
                <Text style={styles.content_infor}> 05254554545</Text>
              </View>
              <TouchableOpacity onPress={() => setCheck(!check)}>
                <Image
                  style={styles.icon}
                  source={
                    check === false ? Images.iconSwitch : Images.iconSwitchOff
                  }
                />
              </TouchableOpacity>
            </View>
            <View style={styles.view_infor}>
              <Text style={styles.title_infor}>Chủ tài khoản: </Text>
              <Text style={styles.content_infor}> Nguyễn Phú Hoàng</Text>
            </View>
            <View style={styles.view_infor}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.title_infor}>Số tài khoản: </Text>
                <Text style={styles.content_infor}> 05254554545</Text>
              </View>
              <TouchableOpacity>
                <Image
                  style={styles.icon}
                  source={
                    check === false ? Images.iconSwitch : Images.iconSwitchOff
                  }
                />
              </TouchableOpacity>
            </View>
            <View style={styles.view_infor}>
              <Text style={styles.title_infor}> Ngân hàng: </Text>
              <Text style={styles.content_infor}> Techcombank</Text>
            </View>
            <View style={styles.view_infor}>
              <Text style={styles.title_infor}>Chủ tài khoản: </Text>
              <Text style={styles.content_infor}> Nguyễn Phú Hoàng</Text>
            </View>
            <View style={styles.view_infor}>
              <Text style={styles.title_infor}>Số tài khoản: </Text>
              <Text style={styles.content_infor}> 05254554545</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn_confirm}>
          <Text style={styles.btn_text}> Nạp tiền</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WithdrawMoney;
