import * as S from './styles';
import HomeIcon from '../../assets/icons/homeIcon.png';
import DonateIcon from '../../assets/icons/donationIcon.png';
import LocalIcon from '../../assets/icons/localIcon.png';
import ProfileIcon from '../../assets/icons/profileIcon.png';
import { useResolvedPath, useMatch } from 'react-router-dom';

export const Navbar = ({ type, authFlow = false }) => {
  return (
    <S.Wrapper>
      <S.Nav>
        {authFlow ? (
          <>
            <CustomLink to="/perfil">
              <S.NavLinkIcon src={ProfileIcon} type={type} />
              Perfil
            </CustomLink>

            <CustomLink to="/metas">
              <S.NavLinkIcon src={DonateIcon} type={type} />
              Metas
            </CustomLink>

            <CustomLink to="/localizar">
              <S.NavLinkIcon src={LocalIcon} type={type} />
              Localizar
            </CustomLink>
          </>
        ) : (
          <>
            <CustomLink to="/">
              <S.NavLinkIcon src={HomeIcon} type={type} />
              Início
            </CustomLink>

            <CustomLink to="/doacoes">
              <S.NavLinkIcon src={DonateIcon} type={type} />
              Doações
            </CustomLink>

            <CustomLink to="/localizar">
              <S.NavLinkIcon src={LocalIcon} type={type} />
              Localizar
            </CustomLink>
          </>
        )}
      </S.Nav>
    </S.Wrapper>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <S.NavItem className={isActive ? 'active' : ''}>
      <S.NavL to={to} {...props}>
        {children}
      </S.NavL>
    </S.NavItem>
  );
}
