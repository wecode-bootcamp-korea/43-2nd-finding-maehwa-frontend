import React from 'react';
import * as S from './LikeCommentStyle';
import { LikeFilled } from '@ant-design/icons';

const LikeComment = ({ isLike, handleLikeReview }) => {
  return (
    <S.LikeReview onClick={handleLikeReview}>
      {!isLike ? (
        <S.StyledLikeOutlined />
      ) : (
        <LikeFilled style={{ color: '#9CD5C2' }} />
      )}
      <S.LikeReviewNumber>{isLike ? 1 : 0}</S.LikeReviewNumber>
    </S.LikeReview>
  );
};

export default LikeComment;
