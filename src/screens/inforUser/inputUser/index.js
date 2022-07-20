import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import styles from './style'; 
import {COLOR} from '../../../base/core';
const InputUser = (
  {
    title,
    value,
    onChangeText,
    placeHolder,
    require,
    keyboard,
    onBlur,
    edit,
    secure,
  },
  ref,
) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>{title}</Text>
          {require && <Text style={styles.require}> *</Text>}
        </View>
        <TextInput
          placeholder={placeHolder}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          keyboardType={keyboard ? keyboard : 'default'}
          onBlur={onBlur}
          editable={edit ? false : true}
          secureTextEntry={secure ? true : false}
          placeholderTextColor={COLOR.GRAY_P}
          selection={{start: 0, end: 0}}
        />
      </View>
    </>
  );
};

export default InputUser;
