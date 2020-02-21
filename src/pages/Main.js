import React from 'react';
import { Text, Image } from 'react-native';
import Centered from 'components/Centered';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Main = ({ navigation }) => {
  return (
    <Centered>
      <TouchableOpacity
        style={{ alignItems: 'center' }}
        onPress={() => navigation.navigate('Details')}
      >
        <Image
          source={require('images/inovando.png')}
          style={{ width: 150, height: 100 }}
          resizeMode="contain"
        />
        <Text>A template by @inovando</Text>
      </TouchableOpacity>
    </Centered>
  );
};

export default Main;
