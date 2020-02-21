import React from 'react';
import { Text } from 'react-native';
import Centered from 'components/Centered';

const Main = ({ navigation }) => {
  return (
    <Centered>
      <Text onPress={() => navigation.navigate('Details')}>
        A template by @santospatrick
      </Text>
    </Centered>
  );
};

export default Main;
