import styled from 'styled-components';

export const Description = styled.textarea`
  align-self: center;
  width: 100%;
  min-height: 250px;
  background-color: #ffffff;
  border: ${props => (props.variant === 'error' ? '2px solid #CA2337' : '2px solid #b7bfc6')};
  border-radius: 4px;
  outline: none;
  text-align: ${props => (props.variant === 'error' ? 'center' : 'none')};
  font-weight: 500;
  font-size: ${props => (props.variant === 'error' ? '12px' : '16px')};
  color: #616d78;
  padding: 10px;
  font-family: Montserrat;
  line-height: 16px;
  letter-spacing: 0em;
  margin: 8px 0;

  &::placeholder {
    color: ${props => (props.variant === 'error' ? '#CA2337' : '#616d78')};
  }

  &:focus {
    border: ${props => (props.variant === 'error' ? '2px solid #CA2337' : '2px solid #852baf')};
    -webkit-transition: border 0.2s ease;
    transition: border 0.2s ease;
  }
`;
