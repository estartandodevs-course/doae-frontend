import styled, { css } from 'styled-components';
import * as B from '../Buttons/';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
  margin: 25px auto;
  min-height: 230px;
  max-height: 400px;
  min-width: 279px;
  max-width: 500px;
  width: 70%;

  @media (min-width: 790px) {
    align-items: flex-start;
    width: 100%;
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

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0px;
  gap: 16px;
  width: 100%;
`;

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0px;
  gap: 16px;
  width: 100%;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0px;
  gap: 8px;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    align-items: center;
    color: #b7bfc6;
  }
  h2 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 115%;
    align-items: center;
    color: #aac945;
    text-transform: uppercase;
    margin: 10px;
  }
  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: rgb(97, 109, 120);
  }
`;

export const InfoB = styled.div`
  display: flex;
  padding: 5px;
  margin: 0;
  text-align: none;
  align-items: flex-end;
  font-size: 12px;
  justify-content: space-between;
  width: 100%;
`;

export const Percent = styled.div`
  width: 100%;
`;

export const BText = styled.div``;

export const DonButton = styled(B.Button)``;
