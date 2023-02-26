import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Welcome from './src/Screens/Welcome';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeAreaView}>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'black',
  },
});
