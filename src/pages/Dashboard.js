import React, { useState } from 'react';
import { Text } from 'react-native';
import Centered from 'styles/Centered';
import { useAuth } from 'contexts/auth';
import Button from 'components/Button';
import Modal from 'components/Modal';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const { signOut, user } = useAuth();

  return (
    <Centered>
      <Modal
        title="Deseja mesmo sair?"
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        footerComponent={
          <Button onPress={signOut} stretch>
            Sair
          </Button>
        }
      />
      <Text>Logged in as: {user?.email}</Text>
      <Text>Checkout the github repo!</Text>
      <Text>inovando/react-native-template-inovando</Text>
      <Button onPress={() => setShowModal(true)}>Sair</Button>
    </Centered>
  );
};

export default Dashboard;
