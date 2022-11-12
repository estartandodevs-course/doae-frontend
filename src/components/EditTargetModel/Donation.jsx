import * as S from './styles';
import { showModal } from '../../components/ModalWrapping';
import { ConfirmDonation } from './ConfirmDonation';

export const Donation = () => {
  return (
    <S.Wrapper>
      <S.BlockDonation align={'center'}>
        <S.StatusInfo>Aguardando pagamento</S.StatusInfo>
        <S.DataInfo>Em 25/10/2022 às 21h57 • pix</S.DataInfo>
        <S.Value>R$ 20,00</S.Value>
        <S.Button onClick={() => showModal(<ConfirmDonation />)}>Clique aqui para confirmar</S.Button>
      </S.BlockDonation>
    </S.Wrapper>
  );
};
