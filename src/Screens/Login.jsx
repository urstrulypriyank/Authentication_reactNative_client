import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import background from '../../assets/background.jpg';
import {bgImg} from '../common/background';
import logo from '../../assets/logo.png';
import {logocss} from '../common/logo.js';
const Login = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={logo} style={logocss} />
      <View style={styles.container1}>
        <Text style={{fontSize: 30, color: 'white', fontStyle: 'italic'}}>
          Save More
        </Text>
        <Text style={{fontSize: 22, color: 'white', fontStyle: 'italic'}}>
          Buying and Selling online
        </Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.s1}>
          <Text style={[styles.text, styles.loginText]}>Login</Text>
          <Text style={[styles.text]}>Sign in to continue</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  container1: {
    height: '40%',
    // borderWidth: 10,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    borderWidth: 1,
        
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    opacity: 0.7,
},
loginText: {
    fontSize: 30,
    marginTop: 20,
  },
});
