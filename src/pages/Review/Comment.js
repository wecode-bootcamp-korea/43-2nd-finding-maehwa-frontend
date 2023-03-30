import React, { useState } from 'react';
import * as S from './ReviewStyle';
import { Button } from 'antd';
import { StarFilled, LikeFilled } from '@ant-design/icons';
import LikeComment from './LikeComment';

const Comment = ({
  item,
  saveComment,
  setSaveComment,
  numberComments,
  setNumberComments,
}) => {
  const [isLike, setIsLike] = useState(true);
  const [numberlike, setNumberLike] = useState(0);

  const handleLikeReview = () => {
    setIsLike(isLike => !isLike);
    likeToggle(item);
  };

  const likeToggle = item => {
    saveComment.filter(items => {
      return items.id === item.id && !item.up
        ? ((item.up = !item.up), setNumberLike(numberlike + 1))
        : items.id === item.id && item.up
        ? ((item.up = !item.up), setNumberLike(numberlike - 1))
        : item;
    });
  };

  const deleteComment = item => {
    setSaveComment(
      saveComment.filter(items => {
        return items.id !== item.id;
      })
    );
    setNumberComments(numberComments - 1);
    return item.up === true ? setNumberLike(numberlike - 1) : '';
  };
  return (
    <S.ViewReviewWrap>
      <S.ViewReviewDate>2023.03.12</S.ViewReviewDate>
      <S.UserInfo>
        <S.ViewReviewName>{item.id}</S.ViewReviewName>
        <S.ModifyInfo>
          <S.ModifyReview>수정</S.ModifyReview>
          <S.DeleteReview
            onClick={() => {
              deleteComment(item);
            }}
            type="button"
          >
            삭제
          </S.DeleteReview>
        </S.ModifyInfo>
      </S.UserInfo>

      <S.ViewReviewAssess>
        <StarFilled style={{ color: '#9CD5C2' }} />
        <StarFilled style={{ color: '#9CD5C2' }} />
        <StarFilled style={{ color: '#9CD5C2' }} />
        <StarFilled style={{ color: '#9CD5C2' }} />
        <StarFilled style={{ color: 'lightgray' }} />
      </S.ViewReviewAssess>
      <S.ReviewBtnContainer>
        <S.StyledButton type="default" shape="round" color="lightgray">
          24시 개방
        </S.StyledButton>
        <Button type="default" shape="round">
          향기로운
        </Button>
        <S.ChosenButton type="button">휴지가 많은</S.ChosenButton>
      </S.ReviewBtnContainer>
      <S.ViewReviewMent>{item.value}</S.ViewReviewMent>
      {/* <S.LikeReview onClick={handleLikeReview}>
        {isLike ? (
          <S.StyledLikeOutlined />
        ) : (
          <LikeFilled style={{ color: '#9CD5C2' }} />
        )}
        <S.LikeReviewNumber>{numberlike}</S.LikeReviewNumber>
      </S.LikeReview> */}
      <LikeComment
        isLike={isLike}
        numberlike={numberlike}
        handleLikeReview={handleLikeReview}
      />
    </S.ViewReviewWrap>

    // <div key={item.id} className="contents">
    //   <p>
    //     <strong> {item.id}</strong> {item.value}
    //   </p>
    // </div>
  );
};

export default Comment;
