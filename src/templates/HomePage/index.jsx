import * as S from './styles';
import Searchbar from '../../components/Searchbar';
import { Cards } from '../../components/Cards';
import { Collection } from '../../components/Collection';
import MapIconG from '../../assets/icons/localGreenIcon.png';
import Lar from '../../assets/images/LarMocas.png';

const HomePage = () => (
  <S.Wrapper>
    <Searchbar placeholder={'Pesquisar'} />
    <Collection title={'Arrecadação em tempo real'} amount={'R$ 12.000.174,21'} />
    <Cards
      img={Lar}
      icn={MapIconG}
      text={'Ver perfil'}
      title={'Lar das Moças Cegas'}
      local={'Gonzaga, Santos/SP'}
      type={'purple'}
    />
    <Cards
      img={Lar}
      icn={MapIconG}
      text={'Ver perfil'}
      title={'Lar das Moças Cegas'}
      local={'Gonzaga, Santos/SP'}
      type={'purple'}
    />
    <Cards
      img={Lar}
      icn={MapIconG}
      text={'Ver perfil'}
      title={'Lar das Moças Cegas'}
      local={'Gonzaga, Santos/SP'}
      type={'purple'}
    />
    <Cards
      img={Lar}
      icn={MapIconG}
      text={'Ver perfil'}
      title={'Lar das Moças Cegas'}
      local={'Gonzaga, Santos/SP'}
      type={'purple'}
    />
  </S.Wrapper>
);

export default HomePage;
