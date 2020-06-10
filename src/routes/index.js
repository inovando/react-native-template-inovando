import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useAuth } from 'contexts/auth';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    // Splash Screen
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  if (signed) {
    return <AppRoutes />;
  }

  return <AuthRoutes />;
};

export default Routes;
