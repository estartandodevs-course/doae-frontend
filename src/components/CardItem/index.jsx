import * as S from './styles';
import EditIcon from '../../assets/svg/editPink.svg';
import InfoIcon from '../../assets/svg/info.svg';
import { showModal } from '../../components/ModalWrapping';
import { NewItemModal } from '../NewItemModal';

export const CardItem = ({ product, value }) => {
  return (
    <S.Wrapper>
      <S.WrapperC>
        <S.WrapperInfo>
          <S.WrapperTitleInfo>
            <S.Icon src={InfoIcon} />
            <S.TextInfo>{product}</S.TextInfo>
          </S.WrapperTitleInfo>
          <S.WrapperSubtitleInfo>
            <S.TextInfo>{value}</S.TextInfo>
            <S.Icon
              src={EditIcon}
              onClick={() => {
                showModal(<NewItemModal />);
              }}
            />
          </S.WrapperSubtitleInfo>
        </S.WrapperInfo>
        <S.Text>Consultar base de estabelecimentos</S.Text>
      </S.WrapperC>
    </S.Wrapper>
  );
};
