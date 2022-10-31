import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-flow: row;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
`;

export const Input = styled.input`
  margin: 5px;
  width: ${props => (props.variant === 'error' ? '280px' : '235px')};
  height: 56px;
  background-color: #ffffff;
  border: ${props => (props.variant === 'error' ? '2px solid #CA2337' : '2px solid #b7bfc6')};
  border-radius: 4px;
  outline: none;
  text-align: ${props => (props.variant === 'error' ? 'center' : 'none')};
  font-weight: 500;
  font-size: ${props => (props.variant === 'error' ? '12px' : '16px')};
  line-height: 115%;
  color: #616d78;

  &::placeholder {
    color: ${props => (props.variant === 'error' ? '#CA2337' : '#616d78')};
  }

  &:focus {
    border: ${props => (props.variant === 'error' ? '2px solid #CA2337' : '2px solid #852baf')};
    -webkit-transition: border 0.2s ease;
    transition: border 0.2s ease;
  }
`;

export const Error = styled(Input)``;
