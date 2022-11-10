import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 7rem;
  margin: 1rem auto;
`;

export const WrapperC = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.6rem;
    justify-content: space-between;
    width: 30rem;
    height: 7rem;
    background-color: ${theme.colors.white};
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
    overflow: hidden;
  `}
`;

export const WrapperInfo = styled.div`
    width: 28rem;
    height: 80%;
    display: flex;
    align-items: center;
`;

export const WrapperTitleInfo =  styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const WrapperSubtitleInfo =  styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Icon = styled.img`
    width: 1.7rem;
    height: 1.5rem;
    margin: 0 0.5rem;
`;

export const TextInfo = styled.p`
    font-size: 12px;
    font-weight: 700;
`;

export const Text = styled.p`
    width: 26rem;
    height: 20%;
    color: rgb(175, 204, 80);
    font-size: 10px;
`;