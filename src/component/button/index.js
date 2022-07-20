import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';
const Button = props => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onPress}>
      <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
