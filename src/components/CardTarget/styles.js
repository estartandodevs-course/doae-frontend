import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 20rem;
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
    height: 20rem;
    background-color: ${theme.colors.white};
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
    overflow: hidden;
  `}
`;

export const EditOptions = styled.div`
  width: 28rem;
  display: flex;
  align-item: center;
  justify-content: flex-end;
`;

export const Icon = styled.img`
  width: 1.7rem;
  height: 1.5rem;
  margin: 0 8px;
`;

export const InfoWrapper = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoTitle = styled.p`
  font-style: italic;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  align-items: center;
  color: #b7bfc6;
`;

export const InfoSubtitle = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 115%;
  align-items: center;
  color: rgb(205, 32, 120);
  text-transform: uppercase;
  margin: 0.5rem 0;
`;

export const InfoRaised = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: rgb(97, 109, 120);
`;

export const LabelInfoProgress = styled.div`
  width: 28rem;
  display: flex;
  justify-content: space-between;
`;

export const InfoProgress = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  align-items: center;
  color: #b7bfc6;
`;
