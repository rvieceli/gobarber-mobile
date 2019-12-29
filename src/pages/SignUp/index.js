import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';
import { Background } from '~/components';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="words"
            placeholder="Nome completo"
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Tenho um conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
