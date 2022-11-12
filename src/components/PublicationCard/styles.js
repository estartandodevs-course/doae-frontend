import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
  margin: 1rem auto;
`;

export const WrapperC = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 50px;
    background-color: ${theme.colors.white};
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
    overflow: hidden;
  `}
`;

export const WrapperP = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
`;

export const WrapperT = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

export const ImgWrapper = styled.div`
  height: 60%;
  overflow: hidden;
  position: relative;
`;

export const LogoWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const Descriprion = styled.p`
  font-size: 10px;
  font-weight: 500;
  font-style: italic;
  opacity: 0.8;

  @media (min-width: 790px) {
    font-size: 16px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin: 0.5rem 0;
  color: rgb(30, 37, 42);
`;

export const Subtitle = styled.p`
  font-size: 10px;
  font-weight: 500;
  font-style: italic;
  opacity: 0.5;
`;

export const Logo = styled.img`
  width: 7rem;
  height: 5rem;
`;
