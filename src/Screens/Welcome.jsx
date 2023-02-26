import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import logo from '../../assets/logo.png';
import {btnContainer, btn, btnText} from '../common/button';
import {bgImg} from '../common/background';
import background from '../../assets/background.jpg';
const Welcome = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <Image source={background} style={bgImg} />
      <Image source={logo} style={styles.logo} />

      <View style={btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={btn}>
            <Text style={btnText}>Login</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <View style={btn}>
            <Text style={btnText}>SignUp</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column-reverse',
  },
  imgContainer: {
    height: '50%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  logo: {
    width: '100%',
    height: undefined,
    aspectRatio: 4,
  },
});
