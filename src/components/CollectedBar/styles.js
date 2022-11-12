import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;
  margin: 1.5rem auto;
`;

export const WrapperC = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 100%;
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

  @media (min-width: 790px) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.p`
  font-size: 10px;
  font-weight: 500;
  font-style: italic;
  opacity: 0.5;
  text-align: center;

  @media (min-width: 790px) {
    font-size: 14px;
  }
`;

export const BarProgress = styled.div`
  width: 80%;
  height: 40%;
  background-color: rgb(205, 32, 120);
  margin: 0.5rem auto;
  border-radius: 0.4rem;
`;

export const CompletedBar = styled.div`
  height: 100%;
  width: 80%;
  background-color: rgb(170, 201, 69);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DescriptionRaised = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: #fff;

  @media (min-width: 790px) {
    font-size: 22px;
  }
`;

export const Subdescription = styled.p`
  font-size: 9px;
  font-weight: 200;
  font-style: italic;
  text-align: center;
  color: #fff;

  @media (min-width: 790px) {
    font-size: 16px;
  }
`;
