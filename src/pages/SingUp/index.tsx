import React from 'react';
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native';
import { Container, Title, BackToSignIn, BackToSignInText } from './styles';
import logoImg from '../../assets/assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
   <>
     <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
      enabled >

      <ScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps="handled" >

      <Container>
          <Image source={logoImg} />

          <View>
            <Title>Crie sua conta</Title>
          </View>

          <Input name="name" icon="user" placeholder="Nome" />
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />

          <Button
            onPress={() => {
              console.log('deu');
            }}
          >
            Entrar
          </Button>

        </Container>

      </ScrollView>

     </KeyboardAvoidingView>

    <BackToSignIn onPress={() => navigation.navigate('SignIn')}>
      <Icon name="arrow-left" size={20} color="#fff" />
      <BackToSignInText>Voltar para logon</BackToSignInText>
    </BackToSignIn>
   </>
  );
};

export default SignUp;
