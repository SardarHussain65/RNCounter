import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Counter from '../screen/counter';
import Home from '../screen/Home';
import NScreen from '../screen/other';
import API from '../components/API';
import FirstUI from '../screen/FirstUI';
import SecondUI from '../screen/SecondUI';
import ThirdUI from '../screen/ThirdUI';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      //  initialRouteName="counter"
      >
        {/* <Stack.Screen name="counter" component={Counter} /> */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen
          name="Notification"
          component={NScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Registration"
          component={ThirdUI}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Api" component={API} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
