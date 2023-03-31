import React, { useState } from 'react';
import * as S from './CommentStyle';
import { Carousel } from 'antd';
import LikeComment from './LikeComment';
import { useRecoilState } from 'recoil';
import exportAtom from '../Atoms';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
const { confirm } = Modal;

const Comment = ({ item }) => {
  const { commentListState, gradeState, selectedTag, selectedTagList } =
    exportAtom;

  const [commentList, setCommentList] = useRecoilState(commentListState);
  const [grade] = useRecoilState(gradeState);
  const [selectTag, setSelectTag] = useRecoilState(selectedTag);
  const [selectedTags, setSelectedTags] = useRecoilState(selectedTagList);
  const [numberComments, setNumberComments] = useState(0);
  const [isLike, setIsLike] = useState(false);

  // const [numberlike, setNumberLike] = useState(0);

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

  const showConfirm = () => {
    confirm({
      title: '작성하신 리뷰를 삭제하시겠습니까?',
      icon: <ExclamationCircleFilled />,

      onOk() {
        console.log('네');
      },
      onCancel() {
        console.log('아니오');
      },
    });
  };

  console.log(selectedTags);

  return (
    <S.ViewReviewWrap>
      <S.ViewReviewDate>23.03.12</S.ViewReviewDate>
      <S.ViewReviewName>{item.id}</S.ViewReviewName>
      <S.UserInfo>
        <S.ViewReviewAssess>
          <S.RateStyled allowHalf disabled defaultValue={grade} />
        </S.ViewReviewAssess>

        <S.ModifyInfo>
          <S.ModifyReview src="/images/pencil.png" />
          <S.DeleteReview
            onClick={showConfirm}
            type="button"
            src="/images/trash.png"
          />
        </S.ModifyInfo>
      </S.UserInfo>
      <S.SelectedTagContainer>
        {selectedTags.map((item, id) => (
          <S.ReviewSelectedTag type="button" key={id}>
            {item.tagName}
          </S.ReviewSelectedTag>
        ))}
      </S.SelectedTagContainer>
      <S.ViewReviewMent>{item.value}</S.ViewReviewMent>

      <LikeComment isLike={isLike} handleLikeReview={handleLikeReview} />
    </S.ViewReviewWrap>
  );
};

export default Comment;
