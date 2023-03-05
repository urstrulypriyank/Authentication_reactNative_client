import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../common/button';

const Home = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Text>Welcome to the homescreen</Text>
      <Button text="Logout" btnContainer={{alignItems: 'center'}} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
