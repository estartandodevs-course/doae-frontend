import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  margin: 1rem auto;
  position relative;
`;

export const ButtonWrapper = styled.div`
  background-color: transparent;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  position: fixed;
  z-index: 2;
  right: 15px;
  bottom: 70px;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: transparent;
  border: none;
`;

export const ImgButton = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;

  &:hover {
    filter: brightness(0.9);
  }
`;
