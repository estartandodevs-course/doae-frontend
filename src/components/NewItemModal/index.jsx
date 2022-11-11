import * as S from './styles';
import { Button } from '../Buttons';
import { Inputs } from '../Inputs';

export const NewItemModal = () => {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        <Inputs placeholder={'Nome do item'} type={'text'} width={'100%'} />
        <Inputs type={'text'} placeholder={'Preço médio unitário'} width={'100%'} />
      </S.InputWrapper>
      <Button text={'Concluir'} isDisabled={false} type={'purple2'} />
    </S.Wrapper>
  );
};
