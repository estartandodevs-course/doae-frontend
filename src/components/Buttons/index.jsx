import * as S from './styles';

export const Button = ({ text, icon, isDisabled, type, sizes, eventButton }) => (
  <S.Buttons type={type} disabled={isDisabled} sizes={sizes} className={type} onClick={eventButton}>
    <S.Icon type={type} src={icon} disabled={isDisabled}></S.Icon>
    {!!text && text}
  </S.Buttons>
);
