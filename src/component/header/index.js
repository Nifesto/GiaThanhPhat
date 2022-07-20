import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Images from '../../assets';
import styles from './styles';
const Header = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={props.onPress}>
        <Image style={styles.icon} source={Images.iconArrowLeft} />
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
      <Image style={styles.iconDone} source={props.img} />
    </View>
  );
};

export default Header;
