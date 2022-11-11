import * as S from './styles';
import { Button } from '../Buttons';
import CamIcon from '../../assets/svg/cam.svg';
import { TextareInput } from '../TextareaInput';

export const NewPublishModal = () => {
  return (
    <S.Wrapper>
      <S.Title>Adicionar publicação</S.Title>
      <TextareInput placeholder={'Digite seu texto'} />
      <S.AreaButtonWrapper>
        <Button text={'Selecionar fotos'} icon={CamIcon} isDisabled={false} type={'pink2'} />
        <Button text={'Publicar'} isDisabled={false} type={'purple2'} />
      </S.AreaButtonWrapper>
    </S.Wrapper>
  );
};
