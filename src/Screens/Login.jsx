import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import background from '../../assets/background.jpg';
import {bgImg} from '../common/background';
const Login = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={background} style={bgImg} />
      <View style={styles.container1}></View>
      <View style={styles.container2}></View>
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
});
