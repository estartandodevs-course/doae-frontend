import * as S from './styles';
import ProgressBar from '../DonationsAmount/progressbar';
import { Donation } from './Donation';

export const EditTargetModel = ({ initDate, finalDate, targetName, targetValue }) => {
  return (
    <S.Wrapper>
      <S.InfoWrapper>
        <S.InfoTargetWrapper>
          <S.DateText>
            Iniciada em: {initDate} • Finaliza em: {finalDate}
          </S.DateText>
          <S.MetaTitle>Nome da meta{targetName}</S.MetaTitle>
          <S.TargetValue>R$ {targetValue}</S.TargetValue>
        </S.InfoTargetWrapper>
        <ProgressBar bgcolor={'#FEC32B'} completed={80} margin={'10px 0px'} />
        <S.LabelInfoProgress>
          <S.InfoProgress>$0,00</S.InfoProgress>
          <S.InfoProgress>R$ {targetValue}</S.InfoProgress>
        </S.LabelInfoProgress>
        <S.InfoTargetWrapper>
          <Donation />
        </S.InfoTargetWrapper>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};
