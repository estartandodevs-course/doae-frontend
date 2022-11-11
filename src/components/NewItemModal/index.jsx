import * as S from './styles';
import { Button } from '../Buttons';

export const NewItemModal = () => {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Input type={'text'} placeholder={'Nome do item'} />
        <S.Input type={'text'} placeholder={'preço médio unitário'} />
      </S.InputWrapper>
      <Button text={'Concluir'} isDisabled={false} type={'purple2'} />
    </S.Wrapper>
  );
};
