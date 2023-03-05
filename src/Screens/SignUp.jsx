import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {wrapper} from '../common/wrapper';
import FormFragment from '../Components/FormFragment';
import Button from '../Components/Button';

const SignUp = ({navigation}) => {
  const [fdata, setFdata] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
    cpassword: '',
  });
  const [errormsg, setErrorMsg] = useState(null);
  const sendToBackend = () => {
    // checking data received
    console.log(fdata);
    // if any fields have empty value

    if (
      fdata.name === '' ||
      fdata.email === '' ||
      fdata.dob === '' ||
      fdata.password === '' ||
      fdata.cpassword === ''
    ) {
      setErrorMsg('All the fields are required');
      return;
    } else {
      if (fdata.password !== fdata.cpassword) {
        setErrorMsg('Password and confirm password must be same');
        return;
      } else {
        fetch('http://10.0.2.2:3000/signUp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(fdata),
        })
          .then(res => res.json())
          .then(data => {
            if (data.error) {
              setErrorMsg(data.error);
            } else {
              Alert.alert('account created sucessfully');
              navigation.navigate('Login');
            }
          });
      }
    }
  };

  return (
    <View style={wrapper}>
      <View style={styles.container1}></View>
      <ScrollView style={styles.container2}>
        <View style={styles.headingContainer}>
          <Text style={[styles.mainHeading, styles.text]}>
            Create a New Account
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={[styles.subHeading, styles.text]}>
              Already Registered?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={{color: '#F50057', fontWeight: 500}}>
                Login Here
              </Text>
            </TouchableOpacity>
          </View>
          {errormsg ? <Text style={{color: 'red'}}>{errormsg}</Text> : null}
        </View>
        <FormFragment
          title="Name"
          onChangeText={text => setFdata({...fdata, name: text})}
          setErrorMsg={setErrorMsg}
        />
        <FormFragment
          title="Email"
          onChangeText={text => setFdata({...fdata, email: text})}
          setErrorMsg={setErrorMsg}
        />
        <FormFragment
          title="DOB"
          onChangeText={text => setFdata({...fdata, dob: text})}
          setErrorMsg={setErrorMsg}
        />
        <FormFragment
          title="Password"
          secureTextEntry={true}
          onChangeText={text => setFdata({...fdata, password: text})}
          setErrorMsg={setErrorMsg}
        />
        <FormFragment
          title="Confirm Password"
          secureTextEntry={true}
          onChangeText={text => setFdata({...fdata, cpassword: text})}
          setErrorMsg={setErrorMsg}
        />
        <Button
          text="SignUp"
          btnContainer={{alignItems: 'center'}}
          onPress={sendToBackend}
        />
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container1: {
    height: '15%',
  },
  container2: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  text: {
    color: 'black',
  },
  mainHeading: {
    fontSize: 32,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
});
