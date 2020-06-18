import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';

export const Input = styled(TextInputMask)`
  border: 1px solid #808080;
  height: 45px;
  border-radius: 4px;
  color: #000;
  padding: 0 10px;
  background-color: #fff;
  opacity: ${(props) => (props.editable ? 1 : 0.3)};
`;
