import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const FormView = ({ children, center = true }) => {
  const styles = center
    ? { alignItems: 'center', justifyContent: 'center' }
    : {};

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      enabled={Platform.OS === 'ios'}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 30,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView style={[{ flex: 1 }, styles]}>{children}</SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FormView;
