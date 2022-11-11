import * as S from './styles';

export const Popup = ({ text }) => {
  return (
    <S.Wrapper>
      <S.Title>{text}</S.Title>
    </S.Wrapper>
  );
};
