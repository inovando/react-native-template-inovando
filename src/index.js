import React from 'react';
import Routes from 'routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from 'contexts/auth';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
