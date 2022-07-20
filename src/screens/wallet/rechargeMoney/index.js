import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {WIDTH} from '../../../base/core';
import Button from '../../../component/button';
import Header from '../../../component/header';
import InputAuth from '../../../component/inputAuth';
import InputUser from '../../inforUser/inputUser';
import styles from './style';
const RechargeMoney = ({navigation}) => {
  const [text, setText] = React.useState('');
  const [data] = React.useState([
    {value: '50.000'},
    {value: '100.000'},
    {value: '200.000'},
    {value: '500.000'},
    {value: '800.000'},
    {value: '1.000.000'},
  ]);
  const [money, setMoney] = React.useState('');
  return (
    <View style={styles.container}>
      <Header title="Nạp tiền vào ví" onPress={() => navigation.goBack()} />
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
              marginBottom: WIDTH * 14,
              marginHorizontal: WIDTH * 17,
            }}>
            Số dư ví: 15000000
          </Text>
          <View style={styles.body_input}>
            <View style={styles.top}>
              <Text style={styles.title_input}>Số tiền nạp</Text>
              <Text style={{...styles.title_input, color: '#FB4E4E'}}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={text => setMoney(text)}
              value={money}
              placeholder=""
            />
          </View>
          <Text
            style={{
              ...styles.title,
              marginBottom: WIDTH * 14,
              marginHorizontal: WIDTH * 17,
            }}>
            Tài khoản đích
          </Text>
          <View style={styles.information}>
            <View>
              <Text style={styles.infor_text}>chủ tài khoản</Text>
              <Text style={styles.infor_text}>số tài khoản</Text>
              <Text style={styles.infor_text}>ngân hàng</Text>
              <Text style={styles.infor_text}>Chi nhánh</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.infor_text}>CÔNG TY TNHH THẠCH GIA</Text>
              <Text style={styles.infor_text}>1900256515525</Text>
              <Text style={styles.infor_text}>Vietcombank</Text>
              <Text style={styles.infor_text}>Vietcombank Hà Tây</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btn_confirm}
          onPress={() =>
            navigation.navigate('ReceiptMoney', {
              money: money,
            })
          }>
          <Text style={styles.btn_text}> Nạp tiền</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RechargeMoney;
