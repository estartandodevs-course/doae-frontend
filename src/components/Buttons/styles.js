import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    cursor: pointer;
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
    font-size: ${theme.font.sizes.small};
    line-height: 105%;
    &:focus-within {
      outline: none;
    }
    &:hover {
      opacity: 0.7;
      transition: background-color 0.4s ease-in-out;
    }
  `}
  ${({ purple, theme }) =>
    purple &&
    css`
      background-color: ${theme.colors.primary04};
      height: ${theme.height.sizes.medium};
      width: ${theme.width.sizes.medium};
    `}
    ${({ icon, theme }) =>
    icon &&
    css`
      display: flex;
      flex-direction: row;
      gap: 0.2rem;
      background-color: ${theme.colors.primary01};
      height: ${theme.height.sizes.xsmall};
      width: ${theme.width.sizes.medium};

      &::before {
        padding-top: 0.1rem;
        content: url(${({ url }) => url});
        width: ${theme.font.sizes.xmedium};
        height: ${theme.font.sizes.xmedium};
      }
    `}
    ${({ pink, theme }) =>
    pink &&
    css`
      background-color: ${theme.colors.primary01};
      height: ${theme.height.sizes.medium};
      width: ${theme.width.sizes.medium};
    `}
    ${({ secondary, theme }) =>
    secondary &&
    css`
      color: ${theme.colors.primary04};
      background-color: ${theme.colors.white};
      border: 0.2rem solid #852baf;
      height: ${theme.height.sizes.medium};
      width: ${theme.width.sizes.large};

      &:hover {
        opacity: none;
        transition: none;
      }
    `}
    ${({ disable, theme }) =>
    disable &&
    css`
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
    `}
`;
