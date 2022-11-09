import * as S from './styles';
import Searchbar from '../../components/Searchbar';
import { Cards } from '../../components/Cards';
import { Collection } from '../../components/Collection';
import { useGetInstitutionsQuery } from '../../store/institution/institution.service';

const HomePage = () => {
  const { data } = useGetInstitutionsQuery();
  return (
    <S.Wrapper>
      <Searchbar placeholder={'Pesquisar'} />
      <Collection title={'Arrecadação em tempo real'} amount={'R$ 12.000.174,21'} />
      {data?.map(institution => (
        <Cards
          key={institution.id}
          img={institution.logo}
          title={institution.name}
          local={institution.address}
          type={'purple'}
        />
      ))}
    </S.Wrapper>
  );
};

export default HomePage;
