import * as S from './styles';
import Searchbar from '../../components/Searchbar';
import DonationsAmmout from '../../components/DonationsAmount';

const Donations = () => {
  return (
    <S.Wrapper>
      <Searchbar placeholder={'Pesquisar'} />
      <DonationsAmmout
        titulo={'Lar das Moças Cegas'}
        meta={'META PRATO FEITO'}
        text={'Contribuir'}
        type={'pink'}
        quantiInic={'R$ 0'}
        quantiFim={'R$ 800,00'}
      />
      <DonationsAmmout
        titulo={'Lar das Moças Cegas'}
        meta={'META Marmitas Vila'}
        text={'Contribuir'}
        type={'pink'}
        quantiInic={'R$ 0'}
        quantiFim={'R$ 400,00'}
      />
      <DonationsAmmout
        titulo={'Lar das Moças Cegas'}
        meta={'META Macarronada'}
        text={'Contribuir'}
        type={'pink'}
        quantiInic={'R$ 0'}
        quantiFim={'R$ 900,00'}
      />
    </S.Wrapper>
  );
};

export default Donations;
