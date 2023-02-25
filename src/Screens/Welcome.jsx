import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import cart from '../../assets/cart.png';
import logo from '../../assets/logo.png';
import {btnContainer, btn, btnText} from '../common/button';

const Welcome = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imgContainer}>
        <Image source={cart} style={styles.cartLogo} />
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={btnContainer}>
        <TouchableOpacity>
          <View style={btn}>
            <Text style={btnText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
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
  },
  imgContainer: {
    flex: 1,
    height: '50%',
    width: '100%',
    marginTop: 200,
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: undefined,
    aspectRatio: 2,
  },
  cartLogo: {
    width: 100,
    height: 100,
  },
});
