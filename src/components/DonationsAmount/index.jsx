import * as S from './styles';
import ProgressBar from './progressbar';
import React from 'react';
import { formatCurrency } from '../../utils/currency';

const DonationsAmount = ({ type, className, completed, quantiFim, meta, titulo }) => {
  return (
    <S.Wrapper>
      <S.Top>
        <S.Text>
          <S.Info>
            <h1>{!!titulo && titulo}</h1>
            <h2>{!!meta && meta} </h2>
            <h3>{formatCurrency(quantiFim)}</h3>
          </S.Info>
          <S.Percent>
            <ProgressBar bgcolor={'#FEC32B'} completed={completed} />
          </S.Percent>
        </S.Text>
      </S.Top>
      <S.Bottom>
        <S.BText>
          <S.Text>
            <S.InfoB>
              <p>R$ 0,00</p>
              <p>{formatCurrency(quantiFim)}</p>
            </S.InfoB>
            <S.DonButton text="CONTRIBUIR" type={type} className={className}></S.DonButton>
          </S.Text>
        </S.BText>
      </S.Bottom>
    </S.Wrapper>
  );
};

export default DonationsAmount;
