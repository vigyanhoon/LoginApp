import 'react-native-gesture-handler';

import React from 'react';

import { Provider } from 'react-redux'
import { store } from './reducers/store';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './views/Login';
import ForgotPassword from './views/ForgotPassword';
import Dashboard from './views/Dashboard';


const Stack = createStackNavigator();

const App: () => React.ReactNode = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
