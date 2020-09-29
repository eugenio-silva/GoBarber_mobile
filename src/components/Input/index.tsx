import React from 'react';
import { TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Container } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = () => {
  return (
    <Container>
      <TextInput />
    </Container>
  );
};
export default Input;
