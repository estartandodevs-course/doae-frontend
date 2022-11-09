import * as S from './styles';
import HomeIcon from '../../assets/icons/homeIcon.png';
import DonateIcon from '../../assets/icons/donationIcon.png';
import LocalIcon from '../../assets/icons/localIcon.png';
import { useResolvedPath, useMatch } from 'react-router-dom';

export const Navbar = ({ type }) => {
  return (
    <S.Wrapper>
      <S.Nav>
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
