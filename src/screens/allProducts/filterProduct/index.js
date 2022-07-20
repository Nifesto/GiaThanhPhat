import React, {useCallback, useEffect, useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import API from '../../../api';
import Images from '../../../assets';
import {COLOR, WIDTH} from '../../../base/core';
import RangeSlider from 'rn-range-slider';
import styles from './style';
import axios from 'axios';
const FilterProduct = (
  {
    navigation,
    filter_id,
    parent_id,
    show,
    close,
    setPriceMaxChoose,
    setPriceMinChoose,
    onConfirm
  },
  props,
) => {
  const [children, setChildren] = React.useState([]);
  const [modalVisible, setModalVisible] = useState();
  const getListChildren = API.getListChildren();
  const [choose, setChoose] = React.useState('-1');
  const [data, setData] = React.useState([]);
  const [low, setLow] = React.useState();
  const [high, setHigh] = React.useState();
  const [id_filter, setId_filter] = React.useState('');
  const api1 = async () => {
    let formData = new FormData();
    formData.append('category_id', parent_id);
    const res = await axios({
      method: 'post',
      url: getListChildren,
      data: formData,
    });
    if (res.data.status === true) {
      setChildren(res.data.data);
    }
  };
  useEffect(() => {
    api1();
  }, []);
  const renderThumb = useCallback(() => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={Images.iconRadioCheck} style={styles.iconRadioCheck} />
      </View>
    );
  }, []);
  const renderRail = useCallback(() => {
    return (
      <View
        style={{
          height: 100,
          backgroundColor: ' pink',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            top: WIDTH * -4,
            width: WIDTH * 350,
            height: WIDTH * 2,
            backgroundColor: 'blue',
            marginBottom: WIDTH * 20,
          }}></View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: COLOR.BLACK_P, marginBottom: WIDTH * 6}}>0</Text>
          <Text style={{color: COLOR.BLACK_P, marginTop: WIDTH * 6}}>
            20000000
          </Text>
        </View>
      </View>
    );
  }, []);
  const renderRailSelected = useCallback(() => {
    return (
      <View>
        <View
          style={{
            height: WIDTH * 2,
            backgroundColor: 'red',
          }}></View>
      </View>
    );
  }, []);
  const renderLabel = useCallback(value => {
    return (
      <View>
        <ImageBackground
          style={{
            width: WIDTH * 50,
            height: WIDTH * 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          source={Images.iconNoti}>
          <Text style={{color: COLOR.BLACK_P}}>{value}</Text>
        </ImageBackground>
      </View>
    );
  }, []);
  const renderNotch = useCallback(() => {
    return <View style={{flex: 1}}></View>;
  }, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);
  const onPress = (item, index) => {
    if (index !== choose) {
      setChoose(index);
      setId_filter(item.id);
    } else {
      setChoose('-1');
    }
  };
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: WIDTH * 15,
        }}
        onPress={() => onPress(item, index)}>
        <Image
          source={
            index === choose ? Images.iconRadioCheck : Images.iconRadioUnCheck
          }
          style={styles.iconRadioCheck}
        />
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const confirm = () => {
    setPriceMaxChoose(high);
    setPriceMinChoose(low);
    close();
    filter_id(id_filter);
    onConfirm()
  };
  return (
    <Modal animationType="slide" transparent={true} visible={show}>
      <View style={styles.centeredView}>
        <View style={styles.header_filter}>
          <Text style={styles.header_title}>Bộ lọc</Text>
          <TouchableOpacity onPress={close}>
            <Image source={Images.iconX} style={styles.iconX} />
          </TouchableOpacity>
        </View>
        <View style={styles.body_filter}>
          <Text style={{...styles.title, marginVertical: WIDTH * 17}}>
            Thương hiệu
          </Text>
          <View>
            <FlatList
              data={children}
              renderItem={renderItem}
              keyExtractor={(items, index) => index.toString()}
            />
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                ...styles.title,
                marginVertical: WIDTH * 17,
              }}>
              Giá tiền
            </Text>
            <RangeSlider
              style={styles.slider}
              min={0}
              max={20000000}
              step={1000}
              floatingLabel
              renderThumb={renderThumb}
              renderRail={renderRail}
              renderRailSelected={renderRailSelected}
              renderLabel={renderLabel}
              renderNotch={renderNotch}
              onValueChanged={handleValueChange}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.btn} onPress={confirm}>
            <Text style={styles.text}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FilterProduct;
