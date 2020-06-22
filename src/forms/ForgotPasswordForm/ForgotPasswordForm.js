import React from 'react';
import { Formik, Field } from 'formik';
import TextField from 'components/TextField';
import Button from 'components/Button';
import schema from './schema';

const ForgotPasswordForm = ({ onSubmit = () => {} }) => {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <>
          <Field
            name="email"
            placeholder="E-mail"
            keyboardType="email-address"
            onSubmitEditing={handleSubmit}
            returnKeyType="next"
            component={TextField}
          />
          <Button stretch loading={isSubmitting} onPress={handleSubmit}>
            Enviar
          </Button>
        </>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
