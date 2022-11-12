import * as S from './styles';

export const Product = ({ product, value, hasCheck }) => {
  return (
    <S.Wrapper margin="20px 8px 8px">
      <S.WrapperInfo>
        {hasCheck ? (
          <S.LabelWrapper notext="true">
            <S.LabelCheckbox>
              <S.Checkbox type="checkbox" />
              <S.Subcheckbox />
            </S.LabelCheckbox>
          </S.LabelWrapper>
        ) : null}
        <S.WrapperTitleInfo>
          <S.TextInfo>{product}</S.TextInfo>
        </S.WrapperTitleInfo>
        <S.WrapperSubtitleInfo>
          <S.TextInfo>R$ {value}</S.TextInfo>
        </S.WrapperSubtitleInfo>
      </S.WrapperInfo>
    </S.Wrapper>
  );
};
