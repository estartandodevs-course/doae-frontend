import * as S from './styles';
import React from 'react';
import LogoMain from '../../assets/svg/logomain.svg';
import { Button } from '../../components/Buttons';
import { Inputs } from '../../components/Inputs';

const Auth = () => {
  return (
    <S.Wrapper>
      <S.Logo src={LogoMain} />
      <S.InputsWrapper>
        <Inputs placeholder={'Email'} type={'text'} width={'80%'} id="email" />
        <Inputs placeholder={'Senha'} type={'password'} width={'80%'} id="pass" />
      </S.InputsWrapper>
      <S.Text>Esqueci minha senha</S.Text>
      <S.ButtonsWrapper>
        <S.NavL to="/perfil">
          <Button text="entrar" isDisabled={false} type={'purple3'} />
        </S.NavL>
      </S.ButtonsWrapper>
    </S.Wrapper>
  );
};

export default Auth;
