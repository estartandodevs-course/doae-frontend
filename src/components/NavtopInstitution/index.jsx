import * as S from './styles';

export const NavtopInstitution = ({ isTarget, isItem }) => {
  return (
    <S.Wrapper>
      <S.ButtonWrapper active={isTarget}>
        <S.Text active={isTarget}>Metas</S.Text>
      </S.ButtonWrapper>
      <S.ButtonWrapper active={isItem}>
        <S.Text active={isItem}>Itens</S.Text>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};
