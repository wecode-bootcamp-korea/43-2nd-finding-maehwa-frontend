import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './WriteReviewStyle';
import exportAtom from '../Atoms';
import { useRecoilState } from 'recoil';
import Tag from './Tag';

const WriteReview = () => {
  const {
    commentState,
    commentListState,
    gradeState,
    selectedTag,
    selectedTagList,
  } = exportAtom;
  const [comment, setComment] = useRecoilState(commentState);
  const [commentList, setCommentList] = useRecoilState(commentListState);
  const [grade, setGrade] = useRecoilState(gradeState);
  const [selectTag, setSelectTag] = useRecoilState(selectedTag);
  const [selectedTags, setSelectedTags] = useRecoilState(selectedTagList);
  const [detailList, setDetailList] = useState([]);

  const navigate = useNavigate();

  const { goDirect } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [goDirect]);

  const changeComment = e => {
    setComment(e.target.value);
  };

  const commentInfo = () => {
    // setCommentList(comment);    ->    [] -> "준영", 이 뜻은 배열에 값을 추가하는 것이 아닌 값을 바꾸는 것
    // setCommentList(commentList.push(comment)) -> push 사용 안됨, 불변성 때문에, 배열에 직접 접근 불가
    // [] -> "준영"  //  [] -> ["준영"]

    const input = {
      id: random(),
      value: comment,
    };

    setCommentList([...commentList, input]);
  };

  const random = () => {
    return Math.random().toString(36).substr(2, 16);
  };

  const handleSubmitBtn = () => {
    commentInfo();
    setComment('');
    navigate('/review');
  };

  const isValidInput = comment.length >= 5 && selectedTags.length > 0;

  const commitCreate = e => {
    return e.key === 'Enter' && isValidInput && handleSubmitBtn();
  };

  const postButton = () => {
    isValidInput && handleSubmitBtn();
  };

  const cancelButton = () => {
    navigate('/review');
  };
  //별점이 같이 올라감 -> 수식 걸어주기 ->나중에
  const handleRating = value => {
    setGrade(value);
  };

  useEffect(() => {
    fetch('./data/tagData.json')
      .then(res => res.json())
      .then(data => setSelectTag(data));
  }, []);

  useEffect(() => {
    fetch('./data/reviewData.json')
      .then(res => res.json())
      .then(data => setDetailList(data[0].result.place));
  }, []);

  const clickTag = id => {
    const updatedTags = selectTag.map(tag =>
      tag.tagId === id ? { ...tag, isChecked: !tag.isChecked } : tag
    ); // 클릭한 태그의 isChecked 값을 반전시켜줌
    const selectedTags = updatedTags.filter(tag => tag.isChecked); // isChecked가 true인 태그만 필터링하여 새로운 배열 생성
    // 선택된 태그들의 정보를 상태값으로 업데이트
    setSelectTag(updatedTags);
    setSelectedTags(selectedTags);
    // const found = selectedTags.find(e => e.tagId === 1);
    // console.log(found);
    console.log(selectedTags);
  };

  return (
    <S.WriteReviewWrap>
      <S.SelectedTitle>
        <S.ReviewTitle>{detailList[0]?.name}</S.ReviewTitle>
        <S.TitleAddress>{detailList[0]?.address}</S.TitleAddress>
      </S.SelectedTitle>
      <S.SelectTagList>
        <S.ButtonListWrap>
          <S.ButtonContainer>
            {selectTag.map(({ tagId, tagName, isChecked }) => {
              return (
                <Tag
                  key={tagId}
                  id={tagId}
                  tagName={tagName}
                  isChecked={isChecked}
                  selectTag={selectTag}
                  setSelectTag={setSelectTag}
                  clickTag={clickTag}
                />
              );
            })}
          </S.ButtonContainer>
        </S.ButtonListWrap>
      </S.SelectTagList>

      <S.ReviewAssessStar>
        <S.RateStyled
          allowHalf
          defaultValue={0}
          onChange={value => handleRating(value)}
        />
      </S.ReviewAssessStar>
      <S.UploadReviewComment>
        <S.WriteReviewComment
          type="text"
          placeholder=" 5자 이상의 리뷰를 남겨주세요"
          onChange={changeComment}
          onKeyPress={commitCreate}
        />

        <S.DoUpload>
          <S.CancelReview type="button" onClick={cancelButton}>
            취소
          </S.CancelReview>
          {isValidInput ? (
            <S.UploadReviewYet type="button" onClick={postButton}>
              등록
            </S.UploadReviewYet>
          ) : (
            <S.UploadReview type="button" onClick={postButton}>
              등록
            </S.UploadReview>
          )}
        </S.DoUpload>
      </S.UploadReviewComment>
    </S.WriteReviewWrap>
  );
};

export default WriteReview;
