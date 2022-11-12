import * as S from './styles';
import { PublicationCard } from '../../components/PublicationCard';
import { ProfileCard } from '../../components/ProfileCard';
import { CollectedBar } from '../../components/CollectedBar';
import { Config } from '../../components/Config';
import { ButtonAddPost } from '../../components/ButtonAddPost';
import { showModal } from '../../components/ModalWrapping';
import { NewPublishModal } from '../../components/NewPublishModal';

const Profile = () => {
  return (
    <S.Wrapper>
      <S.CardsWrapper>
        <Config />
        <ProfileCard
          img="https://res.cloudinary.com/dfpdjjdfp/image/upload/v1667862266/gibuk4ah0mqoj7wihxye.jpg"
          name="Lar das Moças Cegas"
          metadata="Gonzaga, Santos/SP"
        />
        <CollectedBar />
        <PublicationCard
          img="https://res.cloudinary.com/dfpdjjdfp/image/upload/v1667862266/gibuk4ah0mqoj7wihxye.jpg"
          name="Lar das Moças Cegas"
          city="Santos"
          data="25/09/2022"
          time="23:10"
          text="Ocorreu nesse final de semana dos dias 24 e 25 de setembro a ação da primavera! Alguns dos nossos voluntários também fizeram as entregas para moradores de rua da região."
        />
        <ButtonAddPost eventButton={() => showModal(<NewPublishModal />)} />
      </S.CardsWrapper>
    </S.Wrapper>
  );
};

export default Profile;
