import * as S from './styles';
import LogoMain from '../../assets/svg/logomain.svg';
import { Button } from '../../components/Buttons';

const Login = () => {
  return (
    <S.Wrapper>
      <S.Logo src={LogoMain} mb={'100px'} />
      <S.ButtonsWrapper>
        <S.NavL to="/doacoes">
          <Button text="sou doador" isDisabled={false} type={'pink2'} />
        </S.NavL>
        <S.NavL to="/auth">
          <Button text="sou instituição" isDisabled={false} type={'purple3'} />
        </S.NavL>
      </S.ButtonsWrapper>
      <S.Text>Preciso de ajuda</S.Text>
    </S.Wrapper>
  );
};

export default Login;
