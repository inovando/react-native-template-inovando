import React from 'react';
import { Container } from './styles';

const Centered = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Centered;
