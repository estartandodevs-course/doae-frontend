import styled, { css } from 'styled-components';
import * as B from '../Buttons/';

export const Wrapper = styled.div`
  display: flex;
  place-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 350px;

  @media (min-width: 790px) {
    align-items: flex-start;
  }
`;

export const WrapperC = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 500px;
    height: 14.2rem;
    padding: 1.6rem;
    gap: 1.2rem;
    background-color: ${theme.colors.white};
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
    margin: 20px;

    @media (min-width: 790px) {
      height: 50%;
      min-height: 400px;
      flex-direction: column;
      justify-content: space-around;
    }
  `}
`;

export const Img = styled.img`
  height: 9.4rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
    color: ${theme.colors.primary01};
  `}
`;
export const CardButton = styled(B.Button)`
  font-size: 1.2rem !important;
`;

export const WLocal = styled.div`
  display: flex;
  padding: 0;
  gap: 0.8rem;
`;
export const Icn = styled.img`
  justify-content: center;
  width: 1.6rem;
  height: 2rem;
  outline: none;
`;

export const Local = styled.p`
  display: flex;
  align-items: center;
  margin: 10px;
  gap: 0.8rem;
  font-style: italic;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5rem;
  color: #aac945;
`;

export const Tel = styled.p`
  font-style: italic;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #000;
`;
