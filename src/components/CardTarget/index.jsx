import * as S from './styles';
import ViewIcon from '../../assets/svg/ViewIcon.svg';
import EditIcon from '../../assets/svg/EditIcon1.svg';
import ProgressBar from '../DonationsAmount/progressbar';
import { showModal } from '../../components/ModalWrapping';
import { EditTargetModel } from '../EditTargetModel';
import { NewTargetModal } from '../NewTargetModal';

export const CardTarget = ({ name, target, final_value }) => {
  return (
    <S.Wrapper>
      <S.WrapperC>
        <S.EditOptions>
          <S.Icon src={EditIcon} onClick={() => showModal(<NewTargetModal />)} />
          <S.Icon src={ViewIcon} onClick={() => showModal(<EditTargetModel />)} />
        </S.EditOptions>
        <S.InfoWrapper>
          <S.InfoTitle>{name}</S.InfoTitle>
          <S.InfoSubtitle>{target}</S.InfoSubtitle>
          <S.InfoRaised>{final_value}</S.InfoRaised>
        </S.InfoWrapper>
        <ProgressBar bgcolor={'#FEC32B'} completed={80} />
        <S.LabelInfoProgress>
          <S.InfoProgress>$0,00</S.InfoProgress>
          <S.InfoProgress>{final_value}</S.InfoProgress>
        </S.LabelInfoProgress>
      </S.WrapperC>
    </S.Wrapper>
  );
};
