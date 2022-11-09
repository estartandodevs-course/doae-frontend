import * as S from './styles';

export const Collection = ({ title, amount, id, key }) => {
  return (
    <S.Wrapper>
      <S.TitleText key={key} id={id}>
        {!!title && title}
      </S.TitleText>
      <S.Amount key={key} id={id}>
        {!!amount && amount}
      </S.Amount>
    </S.Wrapper>
  );
};
