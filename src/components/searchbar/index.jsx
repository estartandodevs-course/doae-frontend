import { FormStyle } from './style';

export const Searchbar = () => {
  return (
    <FormStyle>
      <img src="./icons/magnifierIcon.png" alt="" />
      <input placeholder="Pesquisar" type="search" />
    </FormStyle>
  );
};
