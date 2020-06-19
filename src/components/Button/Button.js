import React from 'react';
import { Container, Text } from './styles';
import { ActivityIndicator } from 'react-native';

const Button = ({
  children,
  loading = false,
  stretch = false,
  outline = false,
  ...rest
}) => {
  return (
    <Container loading={loading} stretch={stretch} outline={outline} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text outline={outline}>{children}</Text>
      )}
    </Container>
  );
};

export default Button;
