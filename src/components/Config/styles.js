import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  height: 4rem;
  margin: 1rem auto;
`;

export const Img = styled.img`
  height: 3rem;
  width: auto;

  @media (min-width: 790px) {
    height: 4rem;
  }
`;
