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

export const Title = styled.input`
  font-weight: 800;
  font-size: 18px;
  text-transform: uppercase;
  line-height: 23px;
  text-align: center;
  color: #cd2078ff;
  border: none;
  margin: 20px 0;
  text-decoration: underline;
  text-decoration-thickness: 2px;

  &::placeholder {
    color: #cd2078ff;
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${props => props.type};
  justify-content: space-around;
  margin: ${props => props.margin};
`;

export const Input = styled.input`
  width: ${props => props.size}%;
  min-height: 50px;
  padding: 5px;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0 2px;
  background-color: #ffffff;
  border: ${props => (props.variant === 'error' ? '2px solid #CA2337' : '2px solid #b7bfc6')};
  border-radius: 4px;

  &::placeholder {
    color: ${props => (props.variant === 'error' ? '#CA2337' : '#616d78')};
    font-size: 12px;
  }

  &:focus {
    border: ${props => (props.variant === 'error' ? '2px solid #CA2337' : '2px solid #852baf')};
    -webkit-transition: border 0.2s ease;
    transition: border 0.2s ease;
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const LabelCheckbox = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;

  & div:after {
    left: 0.25em;
    right: 0.25em;
    top: 0.13em;
    bottom: 0.13em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
  }
`;

export const Subcheckbox = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 1em;
  width: 1em;
  margin: 6px 6px 6px 0px;
  background-color: #fff;
  border: 2px solid #cd2078ff;
  border-radius: 25px;
  transition: 0.15s;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ div {
    background-color: #cd2078ff;
    border-radius: 25px;
    transition: 0.15s;
  }

  &:checked ~ div:after {
    display: block;
  }
`;

export const Label = styled.span`
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  width: 95%;
  color: #616d78;
`;

export const LabelWrapper = styled.label`
  width: ${props => (props.notext === 'true' ? '26px' : '100%')};
  height: 100%;
  display: flex;
  align-items: center;
`;

export const WrapperInfo = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: rgb(244, 244, 244);
  padding: 10px;
  box-shadow: 0px 2px 4px 0px #0000001a;
  border-radius: 4px;
`;

export const WrapperTitleInfo = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const WrapperSubtitleInfo = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextInfo = styled.p`
  font-size: 14px;
  font-weight: 700;
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
