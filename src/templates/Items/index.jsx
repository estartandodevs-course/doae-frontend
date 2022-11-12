import * as S from './styles';
import { NavtopInstitution } from '../../components/NavtopInstitution';
import { ButtonAddPost } from '../../components/ButtonAddPost';
import { CardItem } from '../../components/CardItem';
import { showModal } from '../../components/ModalWrapping';
import { NewItemModal } from '../../components/NewItemModal';
//import { Popup } from '../../components/Popup';

const Items = () => {
  return (
    <S.Wrapper>
      <NavtopInstitution isItem={true} isTarget={false} />
      <CardItem product={'Pacote Feijão 1KG'} value={'R$ 8,00'} />
      <ButtonAddPost eventButton={() => showModal(<NewItemModal />)} />
    </S.Wrapper>
  );
};

export default Items;
