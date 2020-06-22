import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from 'pages/Login';
import ForgotPassword from 'pages/ForgotPassword';
import { options } from './options';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator screenOptions={options}>
    <AuthStack.Screen
      options={{ headerShown: false }}
      name="Login"
      component={Login}
    />
    <AuthStack.Screen
      options={{ title: 'Esqueci minha senha' }}
      name="ForgotPassword"
      component={ForgotPassword}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
