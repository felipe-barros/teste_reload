import React from 'react';
import { Text } from 'react-native';

function pText({ style, children, ...rest }) {
  return (
    <Text style={[{ fontFamily: 'Roboto', color: '#000' }, style]} {...rest}>
      {children}
    </Text>
  )
}

export default pText;