import * as S from './styles';
import { Button } from '../Buttons';
import { Product } from './Procuct';
import { showModal } from '../../components/ModalWrapping';
import { NewTargetModal } from '.';
import { Popup } from '../Popup';

export const FinishTarget = ({ initDate, finalDate, targetName, targetValue, description }) => {
  return (
    <S.Wrapper>
      <S.InfoWrapper>
        <S.InfoTargetWrapper>
          <S.DateText>Data de inicio: {initDate}</S.DateText>
          <S.DateText>Data de fim: {finalDate}</S.DateText>
          <S.MetaTitle>Nome da meta{targetName}</S.MetaTitle>
          <S.TargetValue>R$ {targetValue}</S.TargetValue>
        </S.InfoTargetWrapper>
        <S.InfoProductWrapper>
          <Product product={'Nome do item'} value="5,00" hasCheck={false} />
        </S.InfoProductWrapper>
        <S.InfoTargetWrapper>
          <S.Decription>
            Essa meta nos ajudará a realizar a ceia de Natal das familias carentes do bairro Radio Clube. Doaê, faça
            parte dessa ideia {description}
          </S.Decription>
        </S.InfoTargetWrapper>
        <Button
          text={'Concluir'}
          isDisabled={false}
          type={'purple2'}
          eventButton={() => showModal(<Popup text="Meta criada com sucesso!" />)}
        />
        <Button
          text={'Voltar e Editar'}
          isDisabled={false}
          type={'secondary2'}
          eventButton={() => showModal(<NewTargetModal />)}
        />
      </S.InfoWrapper>
    </S.Wrapper>
  );
};
