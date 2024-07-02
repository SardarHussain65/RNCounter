import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const SecondUI = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cFInput}>
        <TextInput
          style={styles.fInput}
          placeholder="30 New Town Road, Rawalpindi Pak"
          placeholderTextColor={'white'}
        />
        <View style={styles.inputIcon}>
          <MaterialIcons name="hourglass-empty" size={18} color="white" />
        </View>
      </View>
      <Text style={styles.heading}>Verify Your Number</Text>
      <Text style={styles.msg}>
        WE will send you a One Time Passward on this number.
      </Text>
      <View style={styles.cInput}>
        <View style={styles.input}>
          <Image
            source={require('../assests/flag.png')} // Local image
            style={styles.image}
            resizeMode="stretch"
          />
          <Input value="" placeholder="+92" />
        </View>
        <View style={styles.input2}>
          <Input value="" placeholder="3308720237" secureTextEntry={false} />
        </View>
      </View>
      <View style={styles.logo2}>
        <MaterialIcons name="thumb-up" size={20} color="white" />
      </View>
      <Text style={{color: 'white', fontSize: 16}}>Get OTP</Text>
      <Text style={{color: 'white', fontSize: 14}}>
        Didn't receive code ? Try Again in 15 sec
      </Text>
      <View style={styles.cInput}>
        <View style={styles.inputA}>
          <Input value="" placeholder="0" />
        </View>
        <View style={styles.inputB}>
          <Input value="" placeholder="4" />
        </View>
        <View style={styles.inputC}>
          <Input value="" placeholder="2" />
        </View>
        <View style={styles.inputD}>
          <Input value="" placeholder="0" />
        </View>
      </View>
      <View style={styles.logo2}>
        <MaterialIcons name="thumb-up" size={20} color="white" />
      </View>
      <Text style={{color: 'white', fontSize: 16}}>Verify</Text>
      <Text style={{color: 'white', fontSize: 14}}>verification failed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1c1a1a',
    height: height * 1,
  },
  cFInput: {
    height: 40,
    width: '100%',
    backgroundColor: '#1c1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    paddingHorizontal: 4,
    flexDirection: 'row',
    borderColor: 'black',
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderLeftWidth: 4,
    elevation: 10,
  },
  fInput: {
    width: '85%',
    height: 35,
    backgroundColor: '#1c1a1a',
  },
  inputIcon: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    color: 'white',
  },
  msg: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  cInput: {
    elevation: 1,
    justifyContent: 'center',
    alignItems: '',
    flexDirection: 'row',
    gap: 15,
  },
  input: {
    borderTopColor: 'black',
    paddingLeft: 14,
    borderTopWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 2,
  },
  image: {
    width: 30,
    height: 30,
  },
  input2: {
    width: '65%',
    borderColor: 'black',
    borderTopWidth: 4,
    elevation: 2,
  },
  logo2: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputA: {
    borderColor: 'black',
    borderTopWidth: 4,
    elevation: 2,
  },
  inputB: {
    borderColor: 'black',
    borderTopWidth: 4,
    elevation: 2,
  },
  inputC: {
    borderColor: 'black',
    borderTopWidth: 4,
    elevation: 2,
  },
  inputD: {
    borderColor: 'black',
    borderTopWidth: 4,
    elevation: 2,
  },
});

export default SecondUI;
