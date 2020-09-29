import React from 'react';
import { Image } from 'react-native';
import { Container, Title } from './styles';
import logoImg from '../../assets/assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title>Faça seu logon</Title>

      <Input />
      <Input />

      <Button
        onPress={() => {
          console.log('deu');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
