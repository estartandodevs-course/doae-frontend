import * as S from './style';
import { useState } from 'react';
import magnifierIcon from '../../assets/icons/magnifierIcon.png';
import closeIcon from '../../assets/icons/closeIcon.png';
import { Button } from '../../components/Buttons';

function SearchBar({ placeholder, data, isLoggin }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = event => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter(value => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };
  const SearchIcon = () => (
    <S.IconStyle style={{ height: '100%' }}>
      <img
        src={magnifierIcon}
        alt=""
        style={{
          height: '100%',
        }}
      />
    </S.IconStyle>
  );
  const CloseIcon = () => (
    <S.IconStyle style={{ height: '100%' }}>
      <img
        src={closeIcon}
        alt=""
        style={{
          height: '100%',
        }}
      />
    </S.IconStyle>
  );

  return (
    <S.FormStyle>
      <S.SearchInputs>
        <S.SearchWrapper>
          <S.InputStyle
            isLoggin={isLoggin}
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          <S.IconStyle>
            {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />}
          </S.IconStyle>
          {isLoggin ? (
            <S.ButtonLogin to="/entrar">
              <Button text="entrar" isDisabled={false} type={'purple2'} />
            </S.ButtonLogin>
          ) : null}
        </S.SearchWrapper>
      </S.SearchInputs>
      {filteredData.length != 0 && (
        <S.DataResult>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a key={key} className="dataItem" href={value.link} target="_blank" rel="noreferrer">
                <p>{value.title} </p>
              </a>
            );
          })}
        </S.DataResult>
      )}
    </S.FormStyle>
  );
}

export default SearchBar;
