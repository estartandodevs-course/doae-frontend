import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${({ size }) =>
    size === 'sm' ? '5px 17px' : size === 'md' ? '10px 22px' : size === 'lg' ? '20px 32px' : '0'};
  position: relative;
  width: ${({ variant }) =>
    variant === 'roxa'
      ? '235px'
      : variant === 'rosa'
      ? '235px'
      : variant === 'branca'
      ? '290px;'
      : variant === 'desabi'
      ? '254px'
      : '235px'};
  height: ${({ size }) => (size === 'sm' ? '16px' : size === 'md' ? '31px' : size === 'lg' ? '61px' : '61px')};
  margin: 10px auto;
  background-color: ${({ variant }) =>
    variant === 'roxa'
      ? '#852baf'
      : variant === 'rosa'
      ? '#CD2078'
      : variant === 'branca'
      ? '#FFFFFF'
      : variant === 'success'
      ? '#AAC945'
      : variant === 'warning'
      ? '#CA2337'
      : variant === 'desabi'
      ? '#E3E3E3'
      : '#852baf'};
  box-shadow: ${({ variant }) =>
    variant === 'roxa'
      ? '1px 1px 2px rgba(0, 0, 0, 0.5)'
      : variant === 'rosa'
      ? '1px 1px 2px rgba(0, 0, 0, 0.5)'
      : variant === 'branca'
      ? '1px 1px 2px rgba(0, 0, 0, 0.5)'
      : variant === 'desabi'
      ? 'none'
      : '1px 1px 2px rgba(0, 0, 0, 0.5)'};
  border: ${({ variant }) =>
    variant === 'roxa'
      ? 'none'
      : variant === 'rosa'
      ? 'none'
      : variant === 'branca'
      ? '2px solid #852BAF;'
      : variant === 'desabi'
      ? 'none'
      : 'none'};
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  font-weight: ${({ variant }) =>
    variant === 'roxa'
      ? '700'
      : variant === 'rosa'
      ? '700'
      : variant === 'branca'
      ? '700;'
      : variant === 'desabi'
      ? '600'
      : '700'};
  font-size: 18px;
  line-height: 100%;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: ${({ variant }) =>
    variant === 'roxa'
      ? '#fff'
      : variant === 'rosa'
      ? '#fff'
      : variant === 'branca'
      ? '#852BAF;'
      : variant === 'desabi'
      ? '#fff'
      : '#fff'};
  text-shadow: ${({ variant }) =>
    variant === 'roxa'
      ? '0px 4px 4px rgba(0, 0, 0, 0.1)'
      : variant === 'rosa'
      ? '0px 4px 4px rgba(0, 0, 0, 0.1)'
      : variant === 'branca'
      ? '0px 4px 4px rgba(0, 0, 0, 0.1);'
      : variant === 'desabi'
      ? 'none'
      : '0px 4px 4px rgba(0, 0, 0, 0.1)'};

  &:hover {
    opacity: ${({ variant }) =>
      variant === 'roxa'
        ? '0.7'
        : variant === 'rosa'
        ? '0.7'
        : variant === 'branca'
        ? 'none;'
        : variant === 'desabi'
        ? 'none'
        : '0.7'};
    box-shadow: none;
  }
`;

export const ButtonIcon = styled(StyledButton)`
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 235px;
  height: 53px;
  padding: 16px 8px;
  line-height: 1;
  text-align: center;

  &::before {
    content: '';
    background-image: url(${({ url }) => url});
    background-position: center;
    background-size: contain;
    width: 24px;
    height: 20.22px;
  }
`;
