import React from 'react';
import Dashboard from 'pages/Dashboard';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
        shadowOpacity: 0,
      },
      headerBackTitleVisible: false,
      cardStyle: {
        backgroundColor: '#edf5ff',
        opacity: 1,
      },
    }}
  >
    <AppStack.Screen name="Dashboard" component={Dashboard} />
  </AppStack.Navigator>
);

export default AppRoutes;
