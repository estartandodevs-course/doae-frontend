import * as S from './styles';

export const Cards = ({ img, icn, id, title, text, type, local }) => {
  return (
    <S.Wrapper>
      <S.WrapperC>
        <S.Img id={id} className={type} src={!!img && img}></S.Img>
        <S.Content className={type}>
          <S.Title id={id} className={type}>
            {!!title && title}
          </S.Title>
          <S.CardButton text={text} type={type} className={type}></S.CardButton>
          <S.WLocal>
            <S.Local className={type}>
              <S.Icn src={!!icn && icn}></S.Icn>
              {!!local && local}
            </S.Local>
            <S.Tel className={type ? { type } : 'none'}>TEL: (00)0000-0000</S.Tel>
          </S.WLocal>
        </S.Content>
      </S.WrapperC>
    </S.Wrapper>
  );
};
