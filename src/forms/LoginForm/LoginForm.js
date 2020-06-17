import React from 'react';
import { Button } from 'react-native';
import { Formik, Field } from 'formik';
import TextField from 'components/TextField';
import schema from './schema';

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <>
          <Field
            name="email"
            placeholder="E-mail"
            keyboardType="email-address"
            component={TextField}
          />
          <Field
            name="password"
            placeholder="Senha"
            secureTextEntry
            component={TextField}
          />
          <Button
            disabled={isSubmitting}
            onPress={handleSubmit}
            title="Submit"
          />
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
