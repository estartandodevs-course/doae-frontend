import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  justify-content: flex-end;
  align-items: center;
  width: 30rem;
  height: 4rem;
  margin: 1rem auto;
`;

export const ButtonWrapper = styled.div`
  background-color: transparent;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  position: fixed;
  z-index: 2;
  left: 25.5rem;
  top: calc(100vh - 15rem);
`;

export const ImgButton = styled.img`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    position: fixed;
    z-index: 2;
    left: 25.5rem;
    top: calc(100vh - 15rem);

    &:hover {
        filter: brightness(.9);
    }
`;