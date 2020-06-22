import styled, { css } from 'styled-components/native';

export const Text = styled.Text`
  ${(props) =>
    props.variant === 'title' &&
    css`
      font-size: 16px;
    `}

  ${(props) =>
    props.variant === 'paragraph' &&
    css`
      font-size: 14px;
    `}

  ${(props) =>
    props.variant === 'link' &&
    css`
      font-size: 12px;
    `}

  ${(props) =>
    !!props.center &&
    css`
      text-align: center;
    `}

  ${(props) =>
    !!props.bold &&
    css`
      font-weight: bold;
    `}
`;
