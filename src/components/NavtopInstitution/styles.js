import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7rem;
  margin: 0 auto;
  margin-bottom: 2.5rem;
`;

export const ButtonWrapper = styled.div`
  width: 50%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1rem solid ${props => (props.active ? 'rgb(205, 32, 120)' : 'rgb(183, 191, 198)')};
  transition: 0.4s;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: ${props => (props.active ? 'rgb(205, 32, 120)' : 'rgb(183, 191, 198)')};
  transition: 0.4s;
`;