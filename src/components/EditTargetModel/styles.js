import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 80%;
  margin: ${props => props.margin};
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InfoTargetWrapper = styled.div`
  width: 100%;
`;

export const InfoProductWrapper = styled.div`
  width: 100%;
`;

export const DateText = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  color: #616d78;
`;

export const MetaTitle = styled.p`
  font-family: Raleway;
  font-size: 20px;
  font-weight: 800;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #cd2078;
  text-transform: uppercase;
  margin: 20px;
`;

export const TargetValue = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: #616d78;
`;

export const Decription = styled.p`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #616d78;
  margin: 24px 10px;
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

export const BlockDonation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};
  padding: 16px;
  gap: 16px;
  width: 100%;
  min-height: 120px;
  background: #f4f4f4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 20px;
`;

export const StatusInfo = styled.p`
  width: 100%;
  left: 14.5px;
  top: 20px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #616d78;
`;

export const DataInfo = styled.p`
  width: 100%;
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #616d78;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Value = styled.p`
  width: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 115%;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #aac945;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Button = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 115%;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #cd2078;
  flex: none;
  order: 0;
  flex-grow: 0;
  border: none;
`;

export const TitleValue = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 115%;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #cd2078;
`;

export const TextSimple = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${props => props.bold};
  font-size: 14px;
  line-height: 192.9%;
  display: flex;
  align-items: start;
  color: #616d78;
`;

export const SubtitleBlock = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #616d78;
  text-align: center;
  width: 90%;
  margin: 10px;
`;

export const Span = styled.span`
  color: #cd2078;
  font-weight: 700;
`;
