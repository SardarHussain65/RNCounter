import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/Ionicons';
import API from '../components/API';

const Home = () => {
  const arrowIcon = <Icon name="checkmark-outline" size={20} color="#000" />;
  const arrowForwardIcon = (
    <Icon name="arrow-forward" size={20} color="green" />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button title="Press" iconLeft={arrowIcon} iconRight={arrowForwardIcon} />
      <Input label="Input" placeholder="Enter input" />
      <API />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
