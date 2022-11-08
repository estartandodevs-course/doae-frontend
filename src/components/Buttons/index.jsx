import * as S from './styles';

export const Button = ({ text, icon, isDisabled, type, sizes }) => (
  <S.Buttons type={type} disabled={isDisabled} sizes={sizes} className={type}>
    <S.Icon type={type} src={icon} disabled={isDisabled}></S.Icon>
    {!!text && text}
  </S.Buttons>
);
