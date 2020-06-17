import React from 'react';
import { Text } from 'react-native';
import { Container, Input, ErrorText } from './styles';

const TextField = (props) => {
  const { field, form } = props;
  const { onChange, onBlur, value, name } = field;
  const { touched, errors } = form;

  return (
    <Container>
      <Input
        testID={name}
        onChangeText={onChange(name)}
        onBlur={onBlur(name)}
        value={value}
        placeholderTextColor="#808080"
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
      />
      {touched[field.name] && errors[field.name] && (
        <ErrorText>{errors[field.name]}</ErrorText>
      )}
    </Container>
  );
};

export default TextField;
