import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FirstUI = () => {
  return (
    <View style={styles.main}>
      {/* for logo */}
      <View style={styles.logo}>
        <Image
          source={require('../assests/logo.png')} // Local image
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      {/* for lebel */}
      <Text
        style={{
          fontSize: 30,
          marginTop: '3%',
          color: 'white',
          textShadowColor: 'white',
          textShadowOffset: {width: -1, height: 2},
          textShadowRadius: 10,
        }}>
        Registration
      </Text>

      {/* for Input */}
      <View style={styles.input}>
        <Icon name="person-circle-sharp" size={25} color="white" />
        <Input value="" placeholder="Name" secureTextEntry={false} />
      </View>
      <View style={styles.input}>
        <MaterialIcons name="email" size={25} color="white" />
        <Input value="" placeholder="Email" secureTextEntry={false} />
      </View>
      <View style={styles.input}>
        <MaterialIcons name="lock-person" size={25} color="white" />
        <Input value="" placeholder="Password" secureTextEntry={false} />
      </View>
      {/* for logo2 */}
      <View style={styles.logo2}>
        <MaterialIcons name="thumb-up" size={20} color="white" />
      </View>
      {/* for label2 */}
      <Text
        style={{
          fontSize: 18,
          marginTop: '2%',
          color: 'white',
          textShadowColor: 'white', // Color of the shadow
          textShadowOffset: {width: -1, height: 2}, // Shadow offset
          textShadowRadius: 15, // Blur radius
        }}>
        Sign Up
      </Text>

      <View>
        <Text style={{fontSize: 22, marginTop: '2%', color: 'white'}}>
          Already a member ?
        </Text>
      </View>
    </View>
  );
};

export default FirstUI;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'black',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  logo2: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 4,
    marginTop: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    elevation: 8,
  },
  input: {
    elevation: 2,
    borderTopColor: 'black',
    borderTopWidth: 4,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    width: '95%',
  },
  image: {
    width: 150,
    height: 150,
    position: 'absolute',
    right: -6,
    bottom: -10,
  },
});
