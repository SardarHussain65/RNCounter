import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const NScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.FirstC}>
        <View style={styles.box1}></View>
        <View style={styles.box2}>
          <Text style={styles.mainheading}>Notifications</Text>
        </View>
        <View style={styles.box3}>
          <Image source={require('../assests/asil.png')} style={styles.image} />
        </View>
      </View>

      <View style={styles.SecondC}>
        <Text style={styles.text}>
          You have<Text style={styles.ctext}> 3 Notififations</Text> Today
        </Text>
      </View>

      <View style={styles.ThirdC}>
        <View style={styles.Fflex}>
          <View style={styles.dot} />
          <View style={styles.Tbox1}>
            <View style={styles.cont}>
              <Image
                source={require('../assests/heroPic.png')}
                style={styles.images}
              />
              <View style={styles.contText}>
                <Text style={styles.text1}>Jason</Text>
                <Text style={styles.text2}>
                  Send Approval to join
                  <Text style={styles.text1}> Night dinner</Text>
                </Text>
              </View>
            </View>
            <View style={styles.button}>
              <View style={styles.khali}></View>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.button1}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                  <Text>Approve</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flex}>
          <View style={styles.dot}></View>
          <View style={styles.TObox}>
            <View style={styles.cont}>
              <Image
                source={require('../assests/heroPic.png')}
                style={styles.images}
              />
              <View style={styles.contText}>
                <Text style={styles.text1}>Jason</Text>
                <Text style={styles.text2}>
                  Commented on
                  <Text style={styles.text1}> Night Dinner Post</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flex}>
          <View style={styles.dot}></View>
          <View style={styles.TObox}>
            <View style={styles.cont}>
              <Image
                source={require('../assests/Night.jpg')}
                style={styles.images}
              />
              <View style={styles.contText}>
                <Text style={styles.text1}>Night dinner</Text>
                <Text style={styles.text2}>
                  Rate the event
                  <Text style={styles.text1}> Night dinner</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flex}>
          <View style={styles.dotend}></View>
          <View style={styles.TObox}>
            <View style={styles.cont}>
              <Image
                source={require('../assests/Ysost.png')}
                style={styles.images}
              />
              <View style={styles.contText}>
                <Text style={styles.text1}>Ysost</Text>
                <Text style={styles.text2}>
                  Send Approval to join
                  <Text style={styles.text1}> Night dinner</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flex}>
          <View style={styles.dotend}></View>
          <View style={styles.TObox}>
            <View style={styles.cont}>
              <Image
                source={require('../assests/Ysost.png')}
                style={styles.images}
              />
              <View style={styles.contText}>
                <Text style={styles.text1}>Ysost</Text>
                <Text style={styles.text2}>
                  Send Approval to join
                  <Text style={styles.text1}> Night dinner</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
  },
  FirstC: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  mainheading: {
    fontSize: 26,
    color: 'black',
  },
  image: {
    width: 16,
    height: 16,
  },
  box1: {
    height: 30,
    width: 35,
  },
  box3: {
    borderColor: 'black',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    backgroundColor: 'gold',
    height: 30,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 19.5,
    marginLeft: '6%',
    marginTop: '8%',
    color: 'black',
    fontWeight: 'thin',
  },
  ctext: {
    color: 'rgba(235,191,220,1)',
  },
  ThirdC: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 3,
    borderBottomWidth: 0,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,

    borderRadius: 10,
    marginTop: 10,
    paddingTop: 14,
    paddingLeft: 8,
    paddingRight: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(235,000,100,0.9)',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: '9%',
    marginHorizontal: 6,
  },
  dotend: {
    width: 10,
    height: 10,
    borderRadius: 5,
    // backgroundColor: 'rgba(235,000,100,0.9)',
    // borderWidth: 1,
    // borderColor: 'black',
    // marginTop: '9%',
    marginHorizontal: 6,
  },
  Fflex: {
    display: 'flex',
    flexDirection: 'row',
    height: '20%',
    width: '100%',
    justifyContent: 'center',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    height: '12%',
    width: '100%',
    justifyContent: 'center',
    marginTop: 20,
  },
  Tbox1: {
    width: '100%',
    borderColor: 'black',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    backgroundColor: 'rgba(235,191,220,0.5)',
    borderRadius: 7,
    justifyContent: 'space-evenly',
    padding: 8,
  },
  TObox: {
    width: '100%',
    borderColor: 'black',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    backgroundColor: 'rgba(235,191,220,0.5)',
    borderRadius: 7,
    padding: 8,
  },
  cont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  images: {
    height: 50,
    width: 50,
    backgroundColor: 'black',
    borderRadius: 25,
  },
  contText: {
    marginLeft: 12,
  },
  text1: {
    fontSize: 17,
    color: 'black',
  },
  text2: {
    fontSize: 16,
    // color:"black",
  },
  button: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  khali: {
    width: '50%',
  },
  buttons: {
    width: '50%',
    flexDirection: 'row',
    gap: 5,
  },
  button1: {
    width: 75,
    height: 30,
    borderColor: 'black',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    backgroundColor: 'rgba(235,191,220,0.5)',
    borderRadius: 7,
    alignItems: 'center',
    padding: 2,
  },
  button2: {
    width: 75,
    height: 30,
    borderColor: 'black',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    backgroundColor: 'gold',
    borderRadius: 7,
    alignItems: 'center',
    padding: 2,
  },
});
