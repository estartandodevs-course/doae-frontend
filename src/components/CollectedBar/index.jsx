import * as S from './styles';

export const CollectedBar = () => {
    return (
        <S.Wrapper>
            <S.WrapperC>
                <S.TextWrapper>
                    <S.Raised>R$ 9.000,00</S.Raised>
                    <S.Subtitle>arrecadados com Doaê</S.Subtitle>
                </S.TextWrapper>
                <S.BarProgress>
                    <S.CompletedBar>
                        <S.DescriptionRaised>R$ 8.400,00</S.DescriptionRaised>
                        <S.Subdescription>convertidos em alimentos doados</S.Subdescription>
                    </S.CompletedBar>
                </S.BarProgress>
            </S.WrapperC>
        </S.Wrapper>
    )
}