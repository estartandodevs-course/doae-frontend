import * as S from './styles';
import NewPublish from '../../assets/svg/newPublishIcon.svg';

export const ButtonAddPost = () => {
    return (
        <S.Wrapper>
            <S.ButtonWrapper>
                <S.ImgButton src={NewPublish} />
            </S.ButtonWrapper>
        </S.Wrapper>
    )
}