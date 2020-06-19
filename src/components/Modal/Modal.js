import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Container, Content } from './styles';

const Modal = ({
  children,
  onClose = () => {},
  footerComponent = null,
  title = '',
  contentProps = {},
  height = null,
  ...rest
}) => {
  return (
    <Container
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection={['down']}
      backdropOpacity={0.4}
      {...rest}
    >
      <Content height={height} {...contentProps}>
        <View
          style={{
            flex: 1,
            margin: 20,
            marginBottom: footerComponent ? 0 : 20,
          }}
        >
          {!!title && (
            <Text
              allowFontScaling={false}
              style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}
            >
              {title}
            </Text>
          )}
          {children}
        </View>
        {footerComponent && (
          <SafeAreaView style={{ flexShrink: 0, margin: 20 }}>
            {footerComponent}
          </SafeAreaView>
        )}
      </Content>
    </Container>
  );
};

export default Modal;
