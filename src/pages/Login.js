import React, { useState } from 'react';
import { Text, Image } from 'react-native';
import Centered from 'components/Centered';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from 'contexts/auth';

const Login = () => {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    if (loading) return;

    setLoading(true);
    try {
      await signIn();
    } catch {
      setLoading(false);
    }
  }

  return (
    <Centered>
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={handleSignIn}>
        <Image
          source={require('images/inovando.png')}
          style={{ width: 150, height: 100 }}
          resizeMode="contain"
        />
        <Text>{loading ? 'Carregando...' : 'A template by @inovando'}</Text>
      </TouchableOpacity>
    </Centered>
  );
};

export default Login;
