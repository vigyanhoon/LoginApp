import 'react-native-gesture-handler';

import React, { useEffect } from 'react';

import { Provider } from 'react-redux'
import { store } from './reducers/store';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './views/Login';
import ForgotPassword from './views/ForgotPassword';
import Dashboard from './views/Dashboard';
import SplashScreen from 'react-native-splash-screen';


const Stack = createStackNavigator();

const App: () => React.ReactNode = () => {
  useEffect(() => {
    SplashScreen.hide()
  })
  
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
            <Stack.Screen options={{headerShown: false}} name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen options={{headerLeft: null}} name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
