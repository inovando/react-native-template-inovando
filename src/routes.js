import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from 'pages/Main';
import Details from 'pages/Details';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: '#fff',
        },
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
