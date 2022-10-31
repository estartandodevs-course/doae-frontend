import { StyledButton, ButtonIcon } from './Button.styles';

export const Button = ({ type, variant, className, id, onClick, size, children }) => {
  return (
    <StyledButton
      type={type ? type : 'button'}
      variant={variant}
      className={className ? `btn-component ${className}` : 'btn-component'}
      id={id}
      onClick={onClick}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

export const ButtonImg = ({ type, variant, className, id, onClick, size, url, children }) => {
  return (
    <ButtonIcon
      type={type ? type : 'button'}
      variant={variant}
      className={className ? `btn-component ${className}` : 'btn-component'}
      id={id}
      onClick={onClick}
      size={size}
      url={url}
    >
      {children}
    </ButtonIcon>
  );
};
