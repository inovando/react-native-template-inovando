import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from './styles';

function Typography({
  children,
  variant = 'paragraph',
  center = false,
  bold = false,
  textProps = {},
  disabled = false,
  onPress = null,
  ...rest
}) {
  return (
    <TouchableOpacity
      disabled={!onPress || disabled}
      onPress={onPress}
      {...rest}
    >
      <Text
        allowFontScaling={false}
        center={center}
        bold={bold}
        variant={variant}
        {...textProps}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export default Typography;
