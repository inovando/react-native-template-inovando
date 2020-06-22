import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useAuth } from 'contexts/auth';
import LoginForm from 'forms/LoginForm';
import FormView from 'styles/FormView';

const Login = ({ navigation }) => {
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
    <FormView>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('images/inovando.png')}
          style={{ width: 150, height: 100 }}
          resizeMode="contain"
        />
        <Text style={{ marginBottom: 20 }}>A template by @inovando</Text>
      </View>
      <LoginForm navigation={navigation} onSubmit={handleSignIn} />
    </FormView>
  );
};

export default Login;
