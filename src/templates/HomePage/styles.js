import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xhuge};
    color: ${theme.colors.primary01};
  `}
`;
