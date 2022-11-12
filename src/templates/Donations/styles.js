import styled from 'styled-components';

export const Wrapper = styled.div`
  height: auto;

  @media (min-width: 790px) {
    overflow: hidden;
  }
`;

export const CardsWrapper = styled.div`
  height: auto;
  width: 100vw;
  min-height: 100vh;

  @media (min-width: 790px) {
    display: flex;
    overflow: auto;
  }
`;

export const Title = styled.h1``;
