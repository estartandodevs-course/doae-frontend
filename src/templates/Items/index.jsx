import * as S from './styles';
import { NavtopInstitution } from '../../components/NavtopInstitution';
import { ButtonAddPost } from '../../components/ButtonAddPost';
import { CardItem } from '../../components/CardItem';

const Items = () => {
  return (
    <S.Wrapper>
      <NavtopInstitution isItem={true} isTarget={false} />
      <CardItem product={'Pacote Feijão 1KG'} value={'R$ 8,00'} />
      <ButtonAddPost />
    </S.Wrapper>
  );
};

export default Items;
