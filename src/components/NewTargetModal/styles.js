import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 80%;
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
`;

export const Label = styled.span`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  width: 95%;
  color: #616d78;
`;

export const LabelWrapper = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
