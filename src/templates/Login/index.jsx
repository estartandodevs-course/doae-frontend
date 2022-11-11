import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLoginMutation } from '../../store/auth/auth.service';
import { selectIsAuthenticated } from '../../store/auth/auth.slice';
import * as S from './styles';

const Login = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log(isAuthenticated);
  const [login] = useLoginMutation();
  useEffect(() => {
    login({ email: 'lardasmocas@gmail.com', password: 'Lardasmocascegas@123' });
  }, []);
  return (
    <S.Wrapper>
      <S.Title>Login</S.Title>
    </S.Wrapper>
  );
};

export default Login;
