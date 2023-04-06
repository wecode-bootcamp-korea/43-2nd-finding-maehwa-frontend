import React, { useState } from 'react';
import * as S from './CommentStyle';
import LikeComment from './LikeComment';
import { useRecoilState } from 'recoil';
import exportAtom from '../Atoms';
import { useEffect } from 'react';

const Comment = ({ item }) => {
  const { commentListState, gradeState, selectedTagList } = exportAtom;
  const [selectedTags, setSelectedTags] = useRecoilState(selectedTagList);
  const [commentList, setCommentList] = useRecoilState(commentListState);
  const [grade] = useRecoilState(gradeState);

  const [isLike, setIsLike] = useState(false);
  const handleLikeReview = () => {
    setIsLike(isLike => !isLike);
  };

  const deleteComment = item => {
    setCommentList(
      commentList.filter(items => {
        return items.id !== item.id;
      })
    );
  };
  // console.log(selectedTags);
  return (
    <S.ViewReviewWraps>
      <S.ViewReviewDate>23.03.12</S.ViewReviewDate>
      <S.ViewReviewName>익명</S.ViewReviewName>
      <S.UserInfo>
        <S.ViewReviewAssess>
          <S.RateStyled allowHalf disabled defaultValue={item.rating} />
        </S.ViewReviewAssess>

        <S.ModifyInfo>
          <S.ModifyReview src="/images/pencil.png" />
          <S.DeleteReview
            onClick={deleteComment}
            type="button"
            src="/images/trash.png"
          />
        </S.ModifyInfo>
      </S.UserInfo>
      <S.SelectedTagContainer>
        {item &&
          item.tagList.map((info, id) => (
            <S.ReviewSelectedTag type="button" key={id}>
              {info.tagName}{' '}
              {(info.tagName === '휴지 많음' ||
                info.tagName === '휴지 적음' ||
                info.tagName === '휴지 보통') &&
                '🧻'}{' '}
              {info.tagName === '향기로운' && '🎀'}{' '}
              {info.tagName === '음악이 나오는' && '🎵'}
              {info.tagName === '인테리어가 좋은' && '🖼'}
              {info.tagName === '콘센트가 있는' && '🐽'}
              {info.tagName === '찾기 쉬운' && '👀'}
            </S.ReviewSelectedTag>
          ))}
        {/* {selectedTags.map((item, id) => (
          <S.ReviewSelectedTag type="button" key={id}>
            {item.tagName}
          </S.ReviewSelectedTag>
        ))} */}
      </S.SelectedTagContainer>
      <S.ViewReviewMent>{item.comment}</S.ViewReviewMent>

      <LikeComment isLike={isLike} handleLikeReview={handleLikeReview} />
    </S.ViewReviewWraps>
  );
};

export default Comment;
