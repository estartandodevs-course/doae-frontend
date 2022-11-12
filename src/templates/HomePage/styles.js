import styled from 'styled-components';

export const Wrapper = styled.div`
  @media (min-width: 790px) {
    overflow: hidden;
  }
`;

export const CardsWrapper = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100vw;

  @media (min-width: 790px) {
    display: flex;
    overflow: auto;
  }
`;

export const Title = styled.h1``;
