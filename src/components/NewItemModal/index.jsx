import * as S from './styles';
import { Button } from '../Buttons';
import { Inputs } from '../Inputs';
import { showModal } from '../../components/ModalWrapping';
import { Popup } from '../Popup';

export const NewItemModal = () => {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        <Inputs placeholder={'Nome do item'} type={'text'} width={'100%'} />
        <Inputs type={'text'} placeholder={'Preço médio unitário'} width={'100%'} />
      </S.InputWrapper>
      <Button
        text={'Concluir'}
        isDisabled={false}
        type={'purple2'}
        eventButton={() => {
          showModal(<Popup text="Item adicionado a sua lista de itens com sucesso!" />);
        }}
      />
    </S.Wrapper>
  );
};
