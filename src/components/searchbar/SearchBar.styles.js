import styled from 'styled-components';

export const FormStyle = styled.form`
  padding: 16px;
  width: 417px;
  height: 72px;
  background: #cd2078;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  input {
    padding: 8px 48px;
    width: 385px;
    height: 40px;
    color: #b7bfc6;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    outline: none;
    border-radius: 4px;

    &:focus {
      &::-webkit-input-placeholder {
        color: transparent;
        -webkit-transition: color 0.2s ease;
        transition: color 0.2s ease;
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
    &::placeholder {
      color: #b7bfc6;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
    }
  }
  img {
    position: absolute;
    width: 22px;
    height: 22px;
    top: 50%;
    left: 0;
    transform: translate(135%, -50%);
  }
`;
