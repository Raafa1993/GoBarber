import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import LogoImg from '../../src/assets/logo.svg'

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={LogoImg} alt="Logo GoBarber"/>
      <form>
        <h1>Faça seu logon</h1>

        <input type="text" placeholder="E-mail"/>
        <input type="text" placeholder="Senha"/>

        <button type="submit" >Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn />
        Criar conta</a>
    </Content>

    <Background />

  </Container>
  );

export default SignIn;
