import * as S from './styles';

export const Button = ({ text, icon, isDisabled, type }) => (
  <S.Buttons type={type} disabled={isDisabled} className={type}>
    <S.Icon type={type} src={icon} disabled={isDisabled}></S.Icon>
    {!!text && text}
  </S.Buttons>
);
