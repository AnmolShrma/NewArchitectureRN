import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginContainer from '../UseCases/LoginContainer.js';
import SignupContainer from '../UseCases/SignupContainer.js';

const Stack = createStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="SignUp" component={SignupContainer} />
    </Stack.Navigator>
  );
};
