import * as S from './styles';
import { Button } from '../Buttons';
import { TextareInput } from '../TextareaInput';

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
          <S.Input type="checkbox" size={5} />
          <S.Label>Não definir data de fim</S.Label>
        </S.LabelWrapper>
      </S.InputWrapper>
      <Button text={'Selecionar itens'} isDisabled={false} type={'purple2'} />
    </S.Wrapper>
  );
};
