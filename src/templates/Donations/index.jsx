import * as S from './styles';
import Searchbar from '../../components/Searchbar';
import DonationsAmmout from '../../components/DonationsAmount';
import { useGetTargetsQuery } from '../../store/target/target.service';

const Donations = ({ isLoggin }) => {
  const { data: targets } = useGetTargetsQuery();
  return (
    <S.Wrapper>
      <Searchbar placeholder={'Pesquisar'} isLoggin={isLoggin} />
      <S.CardsWrapper>
        {targets?.map(target => (
          <DonationsAmmout
            key={target.id}
            titulo={target.institution}
            meta={target.name}
            type={'pink2'}
            quantiFim={target.target_value}
            completed={target.percent}
          />
        ))}
      </S.CardsWrapper>
    </S.Wrapper>
  );
};

export default Donations;
