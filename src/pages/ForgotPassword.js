import React, { useState } from 'react';
import FormView from 'styles/FormView';
import ForgotPasswordForm from 'forms/ForgotPasswordForm';
import { View } from 'react-native';
import Typography from 'components/Typography';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const ForgotPassword = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');

  const onSubmit = async (values) => {
    await sleep(1000);
    setEmail(values.email);
    setSuccess(true);
  };

  if (success) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Typography center bold>
          {email}
        </Typography>
        <Typography center>E-mail enviado para alteração de senha!</Typography>
      </View>
    );
  }

  return (
    <FormView>
      <ForgotPasswordForm onSubmit={onSubmit} />
    </FormView>
  );
};

export default ForgotPassword;
