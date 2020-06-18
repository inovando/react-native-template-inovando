import React from 'react';
import Login from 'pages/Login';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: '#edf5ff',
        opacity: 1,
      },
    }}
    headerMode="none"
  >
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
