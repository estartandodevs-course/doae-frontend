import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 37.5rem;
    height: 8.3rem;
    color: #f4f4f4;
    background-color: ${theme.colors.primary04};
  `}
`;

export const TitleText = styled.h3`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.463rem;
`;

export const Amount = styled.p`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.07rem;
`;
