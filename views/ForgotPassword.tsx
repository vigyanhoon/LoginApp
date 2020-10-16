import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { isValidEmail } from '../common/Utility';

const ForgotPassword = ({ navigation, route: { params: { email } } }) => {
  const [enteredEmail, setEmail] = useState(email)
  const [validEmail, setValidEmail] = useState(true)
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  const reset = ()=> {
    navigation.goBack()
  }

  const onEmailChange = (email:string)=> {
    setEmail(email)
    setValidEmail(isValidEmail(email))
  }
  
  return (
    <>
      <View style={styles.body}>
        <View style={styles.container}>
          <Text style={styles.head}>Forgot Password</Text>
          <TextInput placeholder={'Email'} autoCompleteType={'email'} style={[styles.input]} onChangeText={email => onEmailChange(email)} value={enteredEmail} />
          { !validEmail && <Text style={styles.error}>Please enter valid email</Text> }
          <TouchableOpacity onPress={reset} style={styles.button}>
            <Text style={styles.buttonText}> Reset </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    borderColor: 'orange',
    borderWidth: 2
  },
  head: {
    fontSize: 50
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    width: 300,
    borderWidth: 2,
    borderColor: 'darkgrey',
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 10
  },
  error: {
    alignSelf: "flex-start",
    marginBottom: 20,
    color: 'red'
  },
  button: {
    width: 200,
    backgroundColor: 'darkgrey',
    height: 50,
    alignItems:"center",
    justifyContent:"center",
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
});

export default ForgotPassword;
