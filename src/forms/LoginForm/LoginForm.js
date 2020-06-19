import React, { useRef } from 'react';
import { Formik, Field } from 'formik';
import TextField from 'components/TextField';
import MaskedField from 'components/MaskedField';
import Button from 'components/Button';
import schema from './schema';

const LoginForm = ({ onSubmit }) => {
  const password = useRef(null);
  const cpf = useRef(null);

  return (
    <Formik
      initialValues={{ cpf: '', email: '', password: '' }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <>
          <Field
            name="email"
            placeholder="E-mail"
            keyboardType="email-address"
            blurOnSubmit={false}
            onSubmitEditing={() => {
              cpf.current.getElement().focus();
            }}
            returnKeyType="next"
            component={TextField}
          />
          <Field
            name="cpf"
            placeholder="CPF"
            type="cpf"
            blurOnSubmit={false}
            onSubmitEditing={() => {
              password.current.focus();
            }}
            innerRef={cpf}
            component={MaskedField}
          />
          <Field
            name="password"
            placeholder="Senha"
            secureTextEntry
            innerRef={password}
            onSubmitEditing={handleSubmit}
            returnKeyType="send"
            component={TextField}
          />
          <Button stretch loading={isSubmitting} onPress={handleSubmit}>
            Send
          </Button>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
