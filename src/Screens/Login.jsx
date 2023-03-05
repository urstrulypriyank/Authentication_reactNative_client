import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import background from '../../assets/background.jpg';
import {bgImg} from '../common/background';
import logo from '../../assets/logo.png';
import {logocss} from '../common/logo.js';
import {btn} from '../common/button';
import {flexRow} from '../common/FlexRow';

const Login = ({navigation}) => {
  const [fdata, setFdata] = useState({
    email: '',
    password: '',
  });
  const [errormsg, setErrorMsg] = useState(null);

  const sendToBackend = () => {
    if (fdata.email === '' || fdata.password === '') {
      setErrorMsg('All fields are required');
      return;
    } else {
      fetch('http://10.0.2.2:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fdata),
      })
        .then(res => res.json())
        .then(data => {
          if (data.error) setErrorMsg(data.error);
          else {
            Alert.alert('Login Sucess');
            navigation.navigate('Home');
          }
          // console.log(data);
        });
    }
  };

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
        <View>
          {errormsg ? <Text style={{color: 'red'}}>{errormsg}</Text> : null}
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.black}>Email</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => setFdata({...fdata, email: text})}
            onPressIn={() => setErrorMsg(null)}></TextInput>
          <Text style={styles.black}>Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={text => setFdata({...fdata, password: text})}
            onPressIn={() => setErrorMsg(null)}></TextInput>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity>
            <Text style={{color: 'red'}}>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={sendToBackend}>
            <View style={[btn]}>
              <Text>Submit</Text>
            </View>
          </TouchableOpacity>
          <View style={flexRow}>
            <Text style={{color: 'black'}}>Don't have an account </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={{color: 'red'}}>Create a new account</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: 'black',
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
  black: {
    color: 'black',
    fontSize: 18,
    margin: 10,
  },
  formContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'pink',
    borderRadius: 20,

    margin: 5,
  },
});
