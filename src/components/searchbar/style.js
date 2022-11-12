import styled, { css } from 'styled-components';

export const FormStyle = styled.form`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 7.2rem;
    background: ${theme.colors.primary01};
    box-shadow: 0rem 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
  }
`}
`;

export const SearchInputs = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

export const InputStyle = styled.input`
  ${({ theme }) => css`
    background-color: white;
    border: 0;
    border-radius: 0.2rem;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
    padding-left: 3rem;
    height: 3rem;
    width: ${props => (props.isLoggin ? '80%' : '100%')};
    outline: none;
    color: ${theme.colors.neutral01};

    p {
      font-size: 1.8rem;
    }

    &:focus {
      &::-webkit-input-placeholder {
        color: transparent;
        -webkit-transition: color 0.2s ease;
        transition: color 0.2s ease;
        outline: none;
      }

      &:-moz-placeholder {
        /* Firefox 18- */
        color: transparent;
        -webkit-transition: color 0.2s ease;
        transition: color 0.2s ease;
      }

      &::-moz-placeholder {
        /* Firefox 19+ */
        color: transparent;
        -webkit-transition: color 0.2s ease;
        transition: color 0.2s ease;
      }

      &:-ms-input-placeholder {
        color: transparent;
        -webkit-transition: color 0.2s ease;
        transition: color 0.2s ease;
      }
    }
    ::placeholder {
      color: ${theme.colors.neutral01};
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.7rem;
    }
  `}
`;

export const IconStyle = styled.div`
  text-decoration: none;
  outline: none;
  height: 2rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 2px;
`;

export const DataResult = styled.div`
  margin-top: 0.5rem;
  width: 30rem;
  height: 20rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0 0.5rem 1.5rem;
  overflow: hidden;
  overflow-y: auto;

  &::-webkite-scrollbar {
    display: none;
  }

  &.dataResult {
    &.dataItem {
      width: 100%;
      height: 5rem;
      display: flex;
      align-items: center;
      color: black;
    }
  }
`;

export const ButtonLogin = styled.div`
  background-color: none;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
