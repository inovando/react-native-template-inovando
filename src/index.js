import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Routes from 'routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from 'contexts/auth';
import theme from 'config/theme.json';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
