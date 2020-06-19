import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.loading || props.disabled ? '#cccccc' : props.theme.primary};
  border-radius: 4px;
  padding: 10px 20px;
  min-width: 100px;
  align-items: center;
  margin-top: 16px;

  ${(props) =>
    props.outline &&
    css`
      border-width: 1px;
      border-color: ${(props) => props.theme.primary};
      border-style: solid;
      background-color: #fff;
    `}

  ${(props) =>
    props.stretch &&
    css`
      align-self: stretch;
    `}
`;

export const Text = styled.Text`
  color: ${(props) => (props.outline ? props.theme.primary : '#fff')};
  font-weight: bold;
`;
