import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  z-index: 3;
  right: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: ${props => (props.alignModal === 'end' ? 'end' : 'center')};
`;

export const ContentModalWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 200px;
  padding: 32px;
  margin: 16px;
  margin-bottom: 0;
  background-color: white;
  border-radius: 8px;
  position: relative;
`;

export const ButtonCloseWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  left: 16px;
  top: 10px;
  font-size: 24px;
`;

export const IconModal = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
`;
