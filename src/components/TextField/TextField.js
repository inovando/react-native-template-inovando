import React from 'react';
import { Container, Input, ErrorText } from './styles';

const TextField = (props) => {
  const {
    field,
    form,
    innerRef,
    onChange: handleChange = () => {},
    editable = true,
    ...rest
  } = props;

  const { onChange, onBlur, value, name } = field;
  const { touched, errors } = form;

  return (
    <Container>
      <Input
        testID={name}
        ref={innerRef}
        onChangeText={(text) => {
          handleChange(text);
          onChange(name)(text);
        }}
        onBlur={onBlur(name)}
        value={value}
        placeholderTextColor="#808080"
        autoCapitalize="none"
        autoCorrect={false}
        editable={editable}
        {...rest}
      />
      {touched[field.name] && errors[field.name] && (
        <ErrorText>{errors[field.name]}</ErrorText>
      )}
    </Container>
  );
};

export default TextField;
