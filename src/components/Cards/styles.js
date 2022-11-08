import styled, { css } from 'styled-components';
import * as B from '../Buttons/';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  position: relative;
  grid-gap: 1.6rem;
  margin: 0.5rem;
  border-radius: 0.4rem;
`;

export const WrapperC = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    grid-gap: 1.6rem;
    padding: 1.3rem;
    width: fit-content;
    height: fit-content;
    background-color: ${theme.colors.white};
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
  `}
`;

export const Img = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 1.6rem;
  width: fit-content;
  height: fit-content;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
    width: fit-content;
    height: fit-content;
    color: ${theme.colors.primary01};
  `}
`;
export const CardButton = styled(B.Button)`
  width: fit-content;
`;

export const WLocal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 0.8rem;
  width: fit-content;
  height: fit-content;
`;
export const Icn = styled.img`
  justify-content: center;
  width: 1.6rem;
  height: 2rem;
  outline: none;
`;

export const Local = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  font-style: italic;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  width: fit-content;
  height: fit-content;
  color: #aac945;
`;

export const Tel = styled.p`
  font-style: italic;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  width: fit-content;
  height: fit-content;
  color: #000;
`;
