import styled, { css } from 'styled-components';

export const Buttons = styled.button`
  ${({ theme }) => css`
    display: ${({ type }) => (type ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    grid-gap: 0.8rem;
    border-radius: 0.4rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    padding: 1.6rem 2rem;
    margin: 0.5rem;
    height: 6.1rem;
    border: none;
    outline: none;
    text-transform: uppercase;
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    line-height: 105%;
    &:focus-within {
      outline: none;
    }
    &:hover {
      opacity: 0.7;
      transition: background-color 0.4s ease-in-out;
    }
    &.purple {
      background-color: ${theme.colors.primary04};
      height: 3.8rem;
      width: 17.8rem;
    }
    &.purple2 {
      background-color: ${theme.colors.primary04};
      height: ${theme.height.sizes.medium};
      width: ${theme.width.sizes.medium};
    }
    &.pink {
      background-color: ${theme.colors.primary01};
      height: ${theme.height.sizes.medium};
      width: ${theme.width.sizes.medium};
    }
    &.secondary {
      color: ${theme.colors.primary04};
      background-color: ${theme.colors.white};
      border: 0.2rem solid #852baf;
      height: ${theme.height.sizes.medium};
      width: ${theme.width.sizes.large};

      &:hover {
        opacity: none;
        transition: none;
      }
    }
    &.disable {
      background-color: #e3e3e3;
      text-shadow: none;
      box-shadow: none;
      cursor: not-allowed;
      font-weight: 600;
      height: ${theme.height.sizes.medium};
      width: ${theme.width.sizes.xmedium};

      &:hover {
        opacity: none;
        transition: none;
      }
    }
    }
  `}
`;

export const Icon = styled.img`
  ${({ icon, theme }) =>
    icon &&
    css`
      background-color: ${theme.colors.primary01};
      height: ${theme.height.sizes.xsmall};
      width: ${theme.width.sizes.medium};

      &::before {
        display: ${({ src }) => (src ? 'flex' : 'none')};
        align-items: center
        content: url(${({ url }) => url});
        width: ${theme.font.sizes.xmedium};
        height: ${theme.font.sizes.xmedium};
      }
    `}
`;
