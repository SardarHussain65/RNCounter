import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  const {inputStyle, labelStyle, containerStyle} = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor="white"
        autoCorrect={false}
        style={inputStyle}
        value={value}
        // keyboardType=''
        // multiline
        onChangeText={onChangeText}
      />
      {/* icon */}
      {/* {icon ? <icon name={icon}/>} */}
    </View>
  );
};

const styles = {
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    // width: '90%',
    height: 40,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    // flex: 1,
  },
  containerStyle: {
    // height: 40,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export default Input;
