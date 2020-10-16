import React, { ReactNode, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { isValidEmail, isValidPassword } from '../common/Utility';

const Login = ({navigation})=> {

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(true)
  const [password, setPassword] = useState('')
  const [validPassword, setValidPassword] = useState(true)

  useEffect(() => {
    SplashScreen.hide()
    if (validEmail && validPassword) {  //can be checked here if user has valid session
      navigation.navigate('Dashboard')
      setEmail('')
      setPassword('')
    }
  }, [validEmail, validPassword])

  const login = () => {
    setValidEmail(isValidEmail(email))
    setValidPassword(isValidPassword(password))
  }

  const goToForotPassword = () => {
    navigation.navigate('ForgotPassword', {email})
  }

  return (
    <>
      <View style={styles.body}>
        <View style={styles.container}>
          <Text style={styles.head}>Login</Text>
          <TextInput placeholder={'Email'} autoCompleteType={'email'} style={[styles.input]} onChangeText={(text) => setEmail(text)} value={email} />
          { !validEmail && <Text style={styles.error}>Please enter valid email</Text> }
          <TextInput placeholder={'Password'} secureTextEntry={true} style={[styles.input]} onChangeText={text => setPassword(text)} value={password} />
          { !validPassword && <Text style={styles.error}>Please enter password greater than 5</Text> }
          <Text onPress={goToForotPassword} style={styles.forgot}>Forgot password?</Text>
          <TouchableOpacity onPress={login} style={styles.button}>
            <Text style={styles.buttonText}> Login </Text>
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
  forgot: {
    marginVertical: 10,
    fontSize: 20,
    alignSelf: "flex-end"
  },
  button: {
    width: 200,
    backgroundColor: 'darkgrey',
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
});

export default Login;
