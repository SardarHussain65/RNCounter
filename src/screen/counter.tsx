import React, {useState, createContext, useContext} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const number = createContext(0);

function App(): React.JSX.Element {
  const [counter, setCounter] = useState(0);

  const Add = () => {
    return setCounter(counter + 1);
  };

  const Sub = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const Reset = () => {
    return setCounter(0);
  };

  return (
    <number.Provider value={counter}>
      <View style={styles.Container}>
        <StatusBar backgroundColor={'orange'} />

        <LinearGradient
          colors={['blue', 'red', 'yellow']}
          style={styles.linearGradient}>
          <Text style={styles.gradientText}>Counter</Text>
        </LinearGradient>

        <View style={[styles.Result, styles.shadowProp]}>
          <Text style={{color: 'white', fontSize: 28}}>
            {counter < 10 ? '0' + counter : counter}
          </Text>
        </View>
        <View style={styles.Buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Add();
            }}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.sub]}
            onPress={() => {
              Sub();
            }}>
            <Text style={styles.buttonText}>Sub</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.reset]}
            onPress={() => {
              Reset();
            }}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </number.Provider>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  // Heading: {
  //   fontSize: 30,
  //   color: 'white',
  //   marginBottom: '10%',
  // },
  Result: {
    backgroundColor: 'black',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Buttons: {},
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 3,
    alignItems: 'center',
    margin: 10,
    width: 120,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sub: {
    backgroundColor: 'red',
  },
  reset: {
    backgroundColor: 'blue',
  },
  linearGradient: {
    height: '8%',
    width: '50%',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  gradientText: {
    fontSize: 25,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  shadowProp: {
    shadowColor: 'yellow',
    elevation: 10,
  },
});

export default App;
