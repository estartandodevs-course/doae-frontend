import React from 'react';
import { SearchBar, SearchBarContainer } from './styles';

const StyledInput = () => {
  return (
    <SearchBarContainer>
      <SearchBar type="text" placeholder="Pesquisar" />
    </SearchBarContainer>
  );
};

export default StyledInput;
