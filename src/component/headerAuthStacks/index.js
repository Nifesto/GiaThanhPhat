import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './style';
import Images from '../../assets';
const HeaderAuth = props => {
  return (
    <View>
      <View style={styles.header}>
        <Image source={Images.imageHeader} style={styles.imgHeader} />
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
};

export default HeaderAuth;
