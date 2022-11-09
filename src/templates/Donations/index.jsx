import * as S from './styles';
import Searchbar from '../../components/Searchbar';
import DonationsAmmout from '../../components/DonationsAmount';
import { useGetTargetsQuery } from '../../store/target/target.service';

const Donations = () => {
  const { data: targets } = useGetTargetsQuery();
  return (
    <S.Wrapper>
      <Searchbar placeholder={'Pesquisar'} />
      {targets?.map(target => (
        <DonationsAmmout
          key={target.id}
          titulo={target.institution}
          meta={target.name}
          type={'pink'}
          quantiFim={target.target_value}
          completed={target.percent}
        />
      ))}
    </S.Wrapper>
  );
};

export default Donations;
