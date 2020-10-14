import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  const reset = ()=> {

  }
  
  return (
    <>
      <View style={styles.body}>
        <View style={styles.container}>
          <Text style={styles.head}>Forgot Password</Text>
          <TextInput placeholder={'Email'} autoCompleteType={'email'} style={[styles.input]} onChangeText={text => setEmail(text)} value={email} />
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
