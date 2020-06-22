import React from 'react';
import Dashboard from 'pages/Dashboard';

import { createStackNavigator } from '@react-navigation/stack';
import { options } from './options';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator screenOptions={options}>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
  </AppStack.Navigator>
);

export default AppRoutes;
