import * as S from './styles';
import ProgressBar from './progressbar';
import React, { useState, useEffect } from 'react';

const DonationsAmount = ({ type, text, className, quantiInic, quantiFim, meta, titulo }) => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <S.Wrapper>
      <S.Top>
        <S.Text>
          <S.Info>
            <h1>{!!titulo && titulo}</h1>
            <h2>{!!meta && meta} </h2>
            <h3>{!!quantiFim && quantiFim}</h3>
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
              <p>{!!quantiInic && quantiInic}</p>
              <p>{!!quantiFim && quantiFim}</p>
            </S.InfoB>
            <S.DonButton text={text} type={type} className={className}></S.DonButton>
          </S.Text>
        </S.BText>
      </S.Bottom>
    </S.Wrapper>
  );
};

export default DonationsAmount;
