import * as S from './styles';

export const PublicationCard = ({ img, name, city, data, time, text }) => {
  return (
    <S.Wrapper>
      <S.WrapperC>
        <S.WrapperP>
          <S.LogoWrapper>
            <S.Logo src={!!img && img} />
          </S.LogoWrapper>
          <S.WrapperT>
            <S.Title>{name}</S.Title>
            <S.Subtitle>
              {city} • {data} • {time}
            </S.Subtitle>
          </S.WrapperT>
        </S.WrapperP>
        <S.Descriprion>{text}</S.Descriprion>
        <S.ImgWrapper>
          <S.Img src={!!img && img} />
        </S.ImgWrapper>
      </S.WrapperC>
    </S.Wrapper>
  );
};
