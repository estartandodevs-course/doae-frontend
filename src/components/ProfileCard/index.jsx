import * as S from './styles';
import Verified from '../../assets/icons/favoriteIcon.png';
import LocalGreen from '../../assets/svg/LocalGreen.svg';

export const ProfileCard = ({ img, name, metadata }) => {
  return (
    <S.Wrapper>
      <S.WrapperC>
        <S.LogoWrapper>
          <S.Logo src={img} />
        </S.LogoWrapper>
        <S.WrapperT>
          <S.Title>
            {name} <S.Icon src={Verified} />
          </S.Title>
          <S.Subtitle>
            <S.IconLocal src={LocalGreen} /> {metadata}
          </S.Subtitle>
        </S.WrapperT>
      </S.WrapperC>
    </S.Wrapper>
  );
};
