import * as S from './styles';
import NewPublish from '../../assets/svg/newPublishIcon.svg';

export const ButtonAddPost = ({ eventButton }) => {
  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <S.Button onClick={eventButton}>
          <S.ImgButton src={NewPublish} />
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};
