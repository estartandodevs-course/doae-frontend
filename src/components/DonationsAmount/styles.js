import styled from 'styled-components';
import * as B from '../Buttons/';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin: 25px;
  gap: 3px;
  width: 311px;
  height: 224px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0px;
  gap: 16px;
  width: 279px;
  height: 126px;
`;

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0px;
  gap: 16px;
  width: 279px;
  height: 126px;
`;

export const Text = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  padding: 0px;
  gap: 8px;
  width: 279px;
  height: 63px;
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;

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
    font-size: 20px;
    line-height: 115%;
    align-items: center;
    color: #aac945;
  }
  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    /* Neutro 2 */

    color: #616d78;
  }
`;

export const InfoB = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5px;
  margin: 0;
  text-align: none;
  align-items: flex-end;
  font-size: 12px;
  justify-content: space-around;
`;

export const Percent = styled.div``;

export const BText = styled.div``;

export const DonButton = styled(B.Button)``;
