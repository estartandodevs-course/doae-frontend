import styled, { css } from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    height: 100%;
    width: 37.5rem;
    padding: 0.5rem;
    box-sizing: border-box;
    background-color: ${theme.colors.white};
  `}
`;
export const Nav = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  list-style-type: none;
  padding: 0;
  width: 37.2rem;
  height: 5.6rem;
  padding: 0.2rem;
  box-sizing: border-box;
`;
export const NavItem = styled.li`
  align-items: center;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 14px;
  cursor: pointer;
`;
export const NavLinkIcon = styled.img`
  width: 2rem;
  height: 2.6rem;
  cursor: pointer;
`;
export const NavL = styled(BaseNavLink)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem;
    text-decoration: none;
    font-family: ${theme.font.family02};
    color: ${theme.colors.neutral02};
    cursor: pointer;
    &:hover,
    &.active {
      filter: brightness(0) saturate(100%) invert(76%) sepia(71%) saturate(402%) hue-rotate(23deg) brightness(91%)
        contrast(86%);
    }
  `};
`;
