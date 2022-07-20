import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Images from '../../assets';
import { COLOR } from '../../base/core';
import Button from '../../component/button';
import Header from '../../component/header';
import InputAuth from '../../component/inputAuth';
import styles from './style';

const Pay = ({navigation, route}) => {
  const money = route.params?.money;
  const [format, setFormat] = React.useState([
    {
      title: 'Thanh toán khi nhận hàng',
      check: true,
    },
    {
      title: 'Thanh toán bằng ví Mrt',
      check: false,
    },
  ]);
  const chooseMethod = (item, index) => {
    let copied = [...format];
    copied.map((e, i) => {
      if (item.title === e.title) {
        e.check = true;
      } else {
        e.check = false;
      }
    });
    setFormat(copied);
  };
  const [text, setText] = React.useState('');
  const [choose, setChoose] = React.useState('');
  const renderItem = ({index, item}) => {
    <View style={{backgroundColor: 'pink'}}>
      <Image style={styles.icon} source={Images.iconRadioCheck} />
      <Text style={styles.location_text}>{item.name}</Text>
    </View>;
  };
  return (
    <View style={styles.container}>
      <Header title="Thanh Toán" onPress={() => navigation.goBack()} />
      <View style={styles.line} />
      <View style={styles.main}>
        <ScrollView>
          <Text style={styles.title}> địa chỉ nhận hàng</Text>
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Image style={styles.iconLocation} source={Images.iconLocation} />
            <Text style={styles.location_text}>
              Chợ Mễ Trì Hạ - Ngõ 32, Đồng Me, Q. Nam Từ Liêm, Tp. Hà Nội
            </Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={{...styles.location_text, color: '#4263EB'}}>
              Thay đổi
            </Text>
          </TouchableOpacity>
          <Text style={styles.title}>Hình thức thanh toán</Text>
          {!!format &&
            format.length > 0 &&
            format.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => chooseMethod(item, index)}
                  key={index}>
                  <View style={styles.btnChoose}>
                    <Image
                      source={
                        item.check
                          ? Images.iconRadioCheck
                          : Images.iconRadioUnCheck
                      }
                      style={styles.iconCheck}
                    />
                    <Text style={styles.nameCheck}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          <View>
            <View style={styles.top}>
              <Text style={styles.title_input}>
                Nhập đơn vị vận chuyển muốn chọn
              </Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={text => setText(text)}
              value={text}
              placeholder=""
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.footer_view}>
          <Text style={styles.text_footer}>Tổng tiền : </Text>
          <Text style={styles.text_footer}> {money}</Text>
        </View>
        <View style={styles.footer_view}>
          <Text style={styles.text_footer}>Phí vẫn chuyển :</Text>
          <Text style={styles.text_footer}> 30000</Text>
        </View>
        <View style={styles.footer_view}>
          <Text style={styles.text_footer}>Tổng giá trị đơn hàng :</Text>
          <Text style={{...styles.text_footer, color: COLOR.MAIN}}>
            {money + 30000}
          </Text>
        </View>

        <Button title="Thanh Toán"  onPress={()=> navigation.navigate('Successful')}/>
      </View>
    </View>
  );
};

export default Pay;
