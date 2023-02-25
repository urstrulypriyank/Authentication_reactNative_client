import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Welcome from './src/Screens/Welcome';
import Login from './src/Screens/Login';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <Welcome /> */}
      <Login />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'black',
  },
});
