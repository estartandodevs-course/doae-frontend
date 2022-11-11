import { Input, Label } from './style';

export const Inputs = ({ type, variant, className, id, size, placeholder, width }) => {
  return (
    <Label>
      <Input
        variant={variant}
        className={className ? `input-component ${className}` : 'input-component'}
        id={id}
        size={size}
        placeholder={placeholder}
        type={type ? type : 'text'}
        w={width}
      />
    </Label>
  );
};
