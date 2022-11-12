import * as S from './styles';
import { Button } from '../Buttons';
import { showModal } from '../../components/ModalWrapping';
import { Popup } from '../Popup';

export const ConfirmDonation = () => {
  return (
    <S.Wrapper>
      <S.TitleValue>R$ 20,00</S.TitleValue>
      <S.BlockDonation align={'flex-start'}>
        <S.TextSimple bold={700}>DADOS DA DOAÇÃO</S.TextSimple>
        <S.TextSimple bold={500}>Nome:</S.TextSimple>
        <S.TextSimple bold={500}>Email:</S.TextSimple>
        <S.TextSimple bold={500}>Data:</S.TextSimple>
        <S.TextSimple bold={500}>Horário:</S.TextSimple>
      </S.BlockDonation>
      <S.SubtitleBlock>
        Você <S.Span>confirma o recebimento</S.Span> dessa doação?
      </S.SubtitleBlock>
      <Button
        text={'Sim'}
        isDisabled={false}
        type={'purple2'}
        eventButton={() => {
          showModal(<Popup text="O valor foi adicionado a sua meta!" />);
        }}
      />
      <Button
        text={'Não'}
        isDisabled={false}
        type={'secondary2'}
        eventButton={() => {
          showModal(<Popup text="Doação atuzalida como não feita." />);
        }}
      />
    </S.Wrapper>
  );
};
