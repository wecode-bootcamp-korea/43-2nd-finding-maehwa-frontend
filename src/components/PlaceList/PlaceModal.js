import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { TAG_LIST } from './PlaceModalData.js';
import exportAtom from '../../pages/Atoms';
import * as S from './PlaceModalStyle';
import ModalTag from './PlaceModalTag';

const PlaceModal = ({ setModalState }) => {
  const { selectedTag, selectedTagList } = exportAtom;
  const [selectTag, setSelectTag] = useRecoilState(selectedTag);
  const [selectedTags, setSelectedTags] = useRecoilState(selectedTagList);

  useEffect(() => {
    fetch('./data/tagData.json')
      .then(res => res.json())
      .then(data => setSelectTag(data));
  }, [setSelectTag]);

  const clickTag = id => {
    const updatedTags = selectTag.map(tag =>
      tag.tagId === id ? { ...tag, isChecked: !tag.isChecked } : tag
    ); // 클릭한 태그의 isChecked 값을 반전시켜줌
    const selectedTags = updatedTags.filter(tag => tag.isChecked); // isChecked가 true인 태그만 필터링하여 새로운 배열 생성
    // 선택된 태그들의 정보를 상태값으로 업데이트
    setSelectTag(updatedTags);
    setSelectedTags(selectedTags);
    // console.log(selectedTags);
  };

  const goToFilter = () => {
    if (selectedTags.length > 0) setModalState(false);
  };

  return (
    <S.ListContainer>
      <S.SelectTagList>
        <S.TagListTitle>원하는 태그를 선택해주세요</S.TagListTitle>
        <S.ButtonListWrap>
          <S.ButtonContainer>
            {TAG_LIST.map(({ tagId, tagName }) => {
              return (
                <ModalTag
                  key={tagId}
                  id={tagId}
                  tagName={tagName}
                  value={tagId}
                  selectTag={selectTag}
                  setSelectTag={setSelectTag}
                  clickTag={clickTag}
                />
              );
            })}
          </S.ButtonContainer>
        </S.ButtonListWrap>
      </S.SelectTagList>
      <S.FinishBtn>
        <S.CancelCheck type="button" onClick={() => setModalState(false)}>
          취소
        </S.CancelCheck>
        {selectedTags.length > 0 ? (
          <S.FinishTag type="button" onClick={goToFilter}>
            선택
          </S.FinishTag>
        ) : (
          <S.FinishTagYet>선택</S.FinishTagYet>
        )}
      </S.FinishBtn>
    </S.ListContainer>
  );
};

export default PlaceModal;
