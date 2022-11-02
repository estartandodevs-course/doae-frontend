import { FormStyle } from './SearchBar.styles';

function SearchBar() {
  return (
    <FormStyle>
      <img src="./icons/magnifierIcon.png" alt="" />
      <input placeholder="Pesquisar" type="search" />
    </FormStyle>
  );
}

export default SearchBar;
