import React from 'react';
import * as S from './LikeCommentStyle';
import { LikeFilled } from '@ant-design/icons';

const LikeComment = ({ numberlike, isLike, handleLikeReview }) => {
  return (
    <div>
      <S.LikeReview onClick={handleLikeReview}>
        {isLike ? (
          <S.StyledLikeOutlined />
        ) : (
          <LikeFilled style={{ color: '#9CD5C2' }} />
        )}
        <S.LikeReviewNumber>{numberlike}</S.LikeReviewNumber>
      </S.LikeReview>
    </div>
  );
};

export default LikeComment;
