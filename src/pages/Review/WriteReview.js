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

  const isValidInput = selectedTags.length > 0;

  const commitCreate = e => {
    return e.key === 'Enter' && isValidInput && handleSubmitBtn();
  };

  const postButton = () => {
    fetch('http://10.58.52.139:3001/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        placeId: 1,
        rating: grade,
        comment,
        tagId: selectedTags.map(item => item.tagId),
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));

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
    );
    const selectedTags = updatedTags.filter(tag => tag.isChecked);
    setSelectTag(updatedTags);
    setSelectedTags(selectedTags);
  };

  console.log(selectedTags);

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
