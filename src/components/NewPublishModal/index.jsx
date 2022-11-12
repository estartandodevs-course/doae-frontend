import * as S from './styles';
import { Button } from '../Buttons';
import CamIcon from '../../assets/svg/cam.svg';
import { TextareInput } from '../TextareaInput';
import { showModal } from '../../components/ModalWrapping';
import { Popup } from '../Popup';

export const NewPublishModal = () => {
  return (
    <S.Wrapper>
      <S.Title>Adicionar publicação</S.Title>
      <TextareInput placeholder={'Digite seu texto'} />
      <S.AreaButtonWrapper>
        <Button text={'Selecionar fotos'} icon={CamIcon} isDisabled={false} type={'pink2'} />
        <Button
          text={'Publicar'}
          isDisabled={false}
          type={'purple3'}
          eventButton={() => {
            showModal(<Popup text="Publicação Realizada!" />);
          }}
        />
      </S.AreaButtonWrapper>
    </S.Wrapper>
  );
};
