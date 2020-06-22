import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  align-self: stretch;
  margin-bottom: 15px;
`;

export const inputStyles = css`
  border: 1px solid #808080;
  height: 45px;
  border-radius: 4px;
  color: #000;
  padding: 0 10px;
  background-color: #fff;
  opacity: ${(props) => (props.editable ? 1 : 0.3)};
`;

export const Input = styled.TextInput`
  ${inputStyles}
`;

export const ErrorText = styled.Text`
  color: #db3a3a;
  margin-top: 5px;
`;
