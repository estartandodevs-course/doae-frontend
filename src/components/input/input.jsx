import { Input, Label } from './input.styles';

export const InputStylized = ({ type, variant, className, id, size, placeholder }) => {
  return (
    <Label>
      <Input
        variant={variant}
        className={className ? `input-component ${className}` : 'input-component'}
        id={id}
        size={size}
        placeholder={placeholder}
        type={type ? type : 'text'}
      />
    </Label>
  );
};
