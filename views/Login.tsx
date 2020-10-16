import React, { ReactNode, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const Login = ({navigation})=> {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  const login = () => {
    navigation.navigate('Dashboard',)
  }

  const goToForotPassword = () => {
    console.log('forgot pass')
  }

  return (
    <>
      <View style={styles.body}>
        <View style={styles.container}>
          <Text style={styles.head}>Login</Text>
          <TextInput placeholder={'Email'} autoCompleteType={'email'} style={[styles.input]} onChangeText={text => setEmail(text)} value={email} />
          <TextInput placeholder={'Password'} secureTextEntry={true} style={[styles.input]} onChangeText={text => setPassword(text)} value={password} />
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
