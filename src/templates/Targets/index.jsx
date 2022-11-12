import * as S from './styles';
import { NavtopInstitution } from '../../components/NavtopInstitution';
import { ButtonAddPost } from '../../components/ButtonAddPost';
import { CardTarget } from '../../components/CardTarget';
import { showModal } from '../../components/ModalWrapping';
import { NewTargetModal } from '../../components/NewTargetModal';

const Targets = () => {
  return (
    <S.Wrapper>
      <NavtopInstitution isItem={false} isTarget={true} />
      <CardTarget name={'Lar das Moças Cegas'} target={'Meta Combatento a Fome'} final_value={'R$ 800,00'} />
      <ButtonAddPost eventButton={() => showModal(<NewTargetModal />)} />
    </S.Wrapper>
  );
};

export default Targets;
