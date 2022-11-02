import * as S from './styles';

const Button = ({ children, icon, url, disabled, ...props }) => (
  <S.Wrapper hasIcon={!!icon} disabled={disabled} url={url} {...props}>
    {icon}
    {!!children && children}
  </S.Wrapper>
);

export default Button;
