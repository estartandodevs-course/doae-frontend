import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 100%;
  background: #cd2078;
  text-align: center;
`;

export const SearchBar = styled.input`
  border-radius: 4px;
  border: none;
  width: 100%;
  height: 30px;
  margin: 5px;
  color: #939393;
  background-image: url(/public/magnifierIcon.png);
  font-size: 14px;
  background-repeat: no-repeat;
  background-position: 9px 8px;
  padding-left: 30px;
  background-color: #fff;
  box-shadow: none;
  -webkit-appearance: none;
`;
