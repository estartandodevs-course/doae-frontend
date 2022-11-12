import * as S from './styles';
import { Button } from '../Buttons';
import { showModal } from '../../components/ModalWrapping';
import { TextareInput } from '../TextareaInput';
import { AddProduct } from './ModalAddProduct';

export const NewTargetModal = () => {
  return (
    <S.Wrapper>
      <S.Title placeholder="*nome da meta*" />
      <TextareInput placeholder={'Digite seu texto'} />
      <S.InputWrapper type={'column'}>
        <S.Input type="number" placeholder="R$ Valor estimado" size={100} />
        <S.InputWrapper type={'row'} margin={'10px 5px'}>
          <S.Input
            placeholder="Data incio"
            type="text"
            size={50}
            onFocus={e => (e.target.type = 'date')}
            onBlur={e => (e.target.type = 'text')}
          />
          <S.Input
            placeholder="Data incio"
            type="text"
            size={50}
            onFocus={e => (e.target.type = 'date')}
            onBlur={e => (e.target.type = 'text')}
          />
        </S.InputWrapper>
      </S.InputWrapper>
      <S.InputWrapper type={'row'} margin={'0px'}>
        <S.LabelWrapper>
          <S.LabelCheckbox>
            <S.Checkbox type="checkbox" />
            <S.Subcheckbox />
          </S.LabelCheckbox>
          <S.Label>Não definir data de conclusão</S.Label>
        </S.LabelWrapper>
      </S.InputWrapper>
      <Button
        text={'Selecionar itens'}
        isDisabled={false}
        type={'purple2'}
        eventButton={() => showModal(<AddProduct />)}
      />
    </S.Wrapper>
  );
};
