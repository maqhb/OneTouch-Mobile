// Native Imports
import React from 'react';
import {Text} from 'react-native';

const ErrorMessage = ({error, visible}) => {
  if (!visible || !error) return null;
  return (
    <Text
      style={{
        color: '#26ABE2',
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
      }}
    >
      {error}
    </Text>
  );
};

export default ErrorMessage;
