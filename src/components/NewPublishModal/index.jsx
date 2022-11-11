import * as S from './styles';
import { Button } from '../Buttons';
import CamIcon from '../../assets/svg/cam.svg';

export const NewPublishModal = () => {
  return (
    <S.Wrapper>
      <S.Title>Adicionar publicação</S.Title>
      <S.Description placeholder="Digite seu texto"></S.Description>
      <Button text={'Selecionar fotos'} icon={CamIcon} isDisabled={false} type={'pink'} />
      <Button text={'Publicar'} isDisabled={false} type={'purple2'} />
    </S.Wrapper>
  );
};
