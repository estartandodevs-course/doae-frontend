import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 8rem;
  margin: 1.5rem auto;
`;

export const WrapperC = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 30rem;
    height: 8rem;
    padding: 0.7rem;
    background-color: ${theme.colors.white};
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
    overflow: hidden;
  `}
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Raised = styled.p`
  color: rgb(205, 32, 120);
  font-size: 14px;
  font-weight: 800;
  margin: 0 0.1rem;
`;

export const Subtitle = styled.p`
  font-size: 10px;
  font-weight: 500;
  font-style: italic;
  opacity: 0.5;
  text-align: center;
`;

export const BarProgress = styled.div`
    width: 26rem;
    height: 4rem;
    background-color: rgb(205, 32, 120);
    margin: 0.5rem auto;
    border-radius: 0.4rem;
`;

export const CompletedBar = styled.div`
    height: 4rem;
    width: 22rem;
    background-color: rgb(170, 201, 69);
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center
`;

export const DescriptionRaised = styled.p`
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    color: #fff;
`;

export const Subdescription = styled.p`
    font-size: 9px;
    font-weight: 200;
    font-style: italic;
    text-align: center;
    color: #fff;
`;