import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 20vh;
  margin: 1rem auto;
`;

export const WrapperC = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0.7rem;
    background-color: ${theme.colors.white};
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
    overflow: hidden;
  `}
`;

export const LogoWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Logo = styled.img`
  width: 170%;
  height: auto;
`;

export const WrapperT = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 80%;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 800;
  color: rgb(30, 37, 42);
  display: flex;
  align-items: center;
  text-align: center;

  @media (min-width: 680px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  font-size: 10px;
  font-weight: 500;
  font-style: italic;
  color: rgb(170, 201, 69);
  display: flex;
  align-items: center;
  text-align: center;

  @media (min-width: 680px) {
    font-size: 16px;
  }
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 0.5rem;
`;

export const IconLocal = styled.img`
  width: 1.5rem;
  height: 1.6rem;
  margin: 0 0.5rem;
`;
