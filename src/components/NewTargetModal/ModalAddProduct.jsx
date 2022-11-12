import * as S from './styles';
import { Button } from '../Buttons';
import { Product } from './Procuct';
import { showModal } from '../../components/ModalWrapping';
import { FinishTarget } from './FinishTarget';

export const AddProduct = () => {
  return (
    <S.Wrapper>
      <Product product={'Nome item'} value={'5,00'} hasCheck={true} />
      <Button text={'Concluir'} isDisabled={false} type={'purple2'} eventButton={() => showModal(<FinishTarget />)} />
    </S.Wrapper>
  );
};
