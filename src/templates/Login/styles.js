import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  background: #fff;
  height: 80%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 40%;
  height: 40vh;
  margin-top: 0;
  margin-bottom: ${props => props.mb};
`;

export const ButtonsWrapper = styled.div`
  height: 40%;
  width: 80%;
  margin: 50px 0px 20px 0px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  width: 100%;
  margin: 50px 0px 20px 0px;
`;

export const NavL = styled(BaseNavLink)`
  background-color: none;
  text-decoration: none;
  cursor: pointer;
`;

export const Text = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: center;
  color: #616d78;
`;
