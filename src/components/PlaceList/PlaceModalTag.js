import React, { useState, useEffect } from 'react';
// import { useRecoilState } from 'recoil';
import * as S from './PlaceModalStyle';
import { useLocation, useSearchParams } from 'react-router-dom';
// import exportAtom from '../../pages/Atoms';

const ModalTag = ({ id, tagName, value, clickTag }) => {
  // const { selectedTag, selectedTagList } = exportAtom;
  const [searchParams, setSearchParams] = useSearchParams();
  const [tagData, setTagData] = useState([]);
  const [isCheck, setIsCheck] = useState(true);

  const setCategory = value => {
    if (value) {
      searchParams.append('tags', `"${value}"`);
      setSearchParams(searchParams);
      setIsCheck(!isCheck);
    } else {
      const search = searchParams.getAll('tags');
      searchParams.delete('tags');
      search
        .filter(list => list !== value)
        .forEach(value => {
          searchParams.append('tags', `"${value}"`);
        });
      setSearchParams(searchParams);
    }
    clickTag(id);
  };

  return (
    <S.TagButton value={value} onClick={() => setCategory(value)}>
      {isCheck ? (
        <S.StyledButton type="default" shape="round">
          {tagName}
        </S.StyledButton>
      ) : (
        <S.CheckedButton type="default" shape="round">
          {tagName}
        </S.CheckedButton>
      )}
    </S.TagButton>
  );
};

export default ModalTag;
