import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 500px;
  font-size: 16px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 25%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid rgb(183, 191, 198);
  padding: 5px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;
