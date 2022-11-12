import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7rem;
  margin: 0 auto;
  margin-bottom: 2.5rem;
`;

export const ButtonWrapper = styled(BaseNavLink)`
  width: 50%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1rem solid rgb(183, 191, 198);
  transition: 0.4s;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &.active {
    border-bottom: 1rem solid rgb(205, 32, 120);
  }

  &:hover p {
    color: rgb(205, 32, 120) !important;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  color: rgb(183, 191, 198);
  transition: 0.4s;
  cursor: pointer;
  &:hover,
  &.active {
    color: rgb(205, 32, 120);
  }
`;
