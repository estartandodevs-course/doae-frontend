import * as S from './styles';
import { useResolvedPath, useMatch } from 'react-router-dom';

export const NavtopInstitution = () => {
  return (
    <S.Wrapper>
      <CustomLink to="/metas">Metas</CustomLink>
      <CustomLink to="/items">Itens</CustomLink>
    </S.Wrapper>
  );
};

function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <S.ButtonWrapper to={to} className={isActive ? 'active' : ''}>
      <S.Text className={isActive ? 'active' : ''}>{children}</S.Text>
    </S.ButtonWrapper>
  );
}
