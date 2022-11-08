import * as S from './styles';

export const Cards = ({ img, icn, id, title, text, type, local, tel, className }) => {
  return (
    <S.Wrapper>
      <S.WrapperC>
        <S.Img id={id} className={type} src={!!img && img}></S.Img>
        <S.Content className={type}>
          <S.Title id={id} className={type}>
            {!!title && title}
          </S.Title>
          <S.CardButton text={text} type={type} className={className}></S.CardButton>
          <S.WLocal>
            <S.Local className={type}>
              <S.Icn id={id} className={type} src={!!icn && icn}></S.Icn>
              {!!local && local}
            </S.Local>
            <S.Tel className={type ? { type } : 'none'}>{!!tel && tel}</S.Tel>
          </S.WLocal>
        </S.Content>
      </S.WrapperC>
    </S.Wrapper>
  );
};
