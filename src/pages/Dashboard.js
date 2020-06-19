import React from 'react';
import { Text } from 'react-native';
import Centered from 'styles/Centered';
import { useAuth } from 'contexts/auth';
import Button from 'components/Button';

const Dashboard = () => {
  const { signOut, user } = useAuth();

  return (
    <Centered>
      <Text>Logged in as: {user?.email}</Text>
      <Text>Checkout the github repo!</Text>
      <Text>inovando/react-native-template-inovando</Text>
      <Button onPress={signOut}>Logout</Button>
    </Centered>
  );
};

export default Dashboard;
