import Modal from 'react-native-modal';
import styled from 'styled-components/native';

export const Container = styled(Modal)`
  margin: 0;
  justify-content: flex-end;
`;

export const Content = styled.View`
  height: ${(props) => (props.height ? `${props.height}px` : '250px')};
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
