import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { wrapper } from '../common/wrapper'
import FormFragment from '../Components/FormFragment'
import Button from '../Components/Button'

const SignUp = () => {
  return (
    <View style={wrapper}>
       <View style={styles.container1}></View>
       <View style={styles.container2}>
        <View style={styles.headingContainer}>
          <Text style={[styles.mainHeading,styles.text]}>Create a New Account</Text>
          <View style={{'flexDirection': 'row','justifyContent': 'center'}}>
          <Text style={[styles.subHeading,styles.text]}>Already Registered? </Text>
          <TouchableOpacity><Text style={{color: '#F50057',fontWeight: 500}}>Login Here</Text></TouchableOpacity>
          </View>
        </View>
        <FormFragment title="Name"/>
        <FormFragment title="Email"/>
        <FormFragment title="DOB"/>
        <FormFragment title="Password" secureTextEntry={true}/>
        <FormFragment title="Confirm Password"  secureTextEntry={true}/>
        <Button text="SignUp" btnContainer={{alignItems: 'center',}} />
       </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container1: {
    height: "15%",
    
  },
  container2: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  text: {
    color: "black",
  },mainHeading: {
    fontSize: 32,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
})