import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  font-size: 16px;
`;

export const Title = styled.p`
  font-weight: 800;
  font-size: 18px;
  text-transform: uppercase;
  line-height: 23px;
  text-align: center;
  color: #cd2078ff;
`;

export const Description = styled.textarea`
  align-self: center;
  width: 100%;
  min-height: 250px;
  margin: 0 auto;
  border: 1px solid rgb(210, 215, 219);
  resize: none;
  font-size: 10px;
  font-style: italic;
  padding: 5px;
`;
