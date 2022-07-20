import React from 'react';
import {View, Image, Text, TextInput} from 'react-native';
import styles from './style';
import {COLOR, WIDTH, FONTSIZE, FONT_FAMILY} from '../../../base/core';
const InputAuth = props => {
  const [acc, setAcc] = React.useState('');
  return (
    <View style={styles.body_input}>
      <View style={styles.top}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={{...styles.title, color: '#FB4E4E'}}>*</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
      />
    </View>
  );
};
export default InputAuth;
