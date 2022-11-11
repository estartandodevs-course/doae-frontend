import * as S from './styles';
import Searchbar from '../../components/Searchbar';
import { Cards } from '../../components/Cards';
import { Collection } from '../../components/Collection';
import { useGetInstitutionsQuery } from '../../store/institution/institution.service';
import { useGetDonationsSumQuery } from '../../store/donation/donation.service';
import { formatCurrency } from '../../utils/currency';
import { showModal } from '../../components/ModalWrapping';

const ContentModal = () => (
  <>
    <h2>Modal</h2>
  </>
);

const HomePage = () => {
  const { data } = useGetInstitutionsQuery();
  const { data: sum } = useGetDonationsSumQuery(0, {
    pollingInterval: 10000,
  });
  return (
    <S.Wrapper>
      <Searchbar placeholder={'Pesquisar'} />
      <button onClick={() => showModal(<ContentModal />)}>Abrir modal</button>
      <Collection title={'Arrecadação em tempo real'} amount={formatCurrency(sum)} />
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
