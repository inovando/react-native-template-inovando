import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Centered from 'components/Centered';
import { useAuth } from 'contexts/auth';
import LoginForm from 'forms/LoginForm';

const Login = () => {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleSignIn(values) {
    if (loading) return;

    setLoading(true);
    try {
      await signIn(values);
    } catch {
      setLoading(false);
    }
  }

  return (
    <Centered>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('images/inovando.png')}
          style={{ width: 150, height: 100 }}
          resizeMode="contain"
        />
        <Text style={{ marginBottom: 10 }}>
          {loading ? 'Carregando...' : 'A template by @inovando'}
        </Text>
      </View>
      <LoginForm onSubmit={handleSignIn} />
    </Centered>
  );
};

export default Login;
