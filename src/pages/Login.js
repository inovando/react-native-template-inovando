import React, { useState } from 'react';
import { View, Image } from 'react-native';
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
      <View style={{ alignItems: 'center', marginBottom: 40 }}>
        <Image
          source={require('images/inovando.png')}
          style={{ width: 150, height: 120 }}
          resizeMode="contain"
        />
      </View>
      <LoginForm navigation={navigation} onSubmit={handleSignIn} />
    </FormView>
  );
};

export default Login;
