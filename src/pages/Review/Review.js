import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import {
  HeartOutlined,
  ShareAltOutlined,
  HeartFilled,
  StarFilled,
  LikeFilled,
} from '@ant-design/icons';
import { MoreDetailData } from './MoreDetail';
import * as S from './ReviewStyle';
import Comment from './Comment';

const Review = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isHeart, setIsHeart] = useState(true);
  const [isLike, setIsLike] = useState(true);
  //리뷰
  const [comment, setComment] = useState(''); //입력값 저장
  const [saveComment, setSaveComment] = useState([]);
  const [numberComments, setNumberComments] = useState(0);
  // const [numberlike, setNumberLike] = useState(0);
  //스크롤창
  const [isOpenList, setIsOpenList] = useState(true);
  const listContainer = useRef(null);
  // const [inputValue, setInputValue] = useState({
  //   Nickname: '',
  //   reviewComment: '',
  // });
  // const { Nickname, reviewComment } = inputValue;

  const handleHeartFill = () => {
    setIsHeart(isHeart => !isHeart);
  };

  const handleLikeFill = () => {
    setIsLike(isLike => !isLike);
  };
  const handleOpenMore = () => {
    setIsMoreOpen(!isMoreOpen);
  };
  const dragListContainer = () => {
    setIsOpenList(!isOpenList);
    if (isOpenList) {
      listContainer.current.style = 'height: 30%;';
      listContainer.current.style.transition = 'all 0.3s ease-in-out';
    } else {
      removeList();
    }
  };
  const removeList = () => {
    setIsOpenList(!isOpenList);
    listContainer.current.style = 'height: 10%;';
    listContainer.current.style.transition = 'all 0.3s ease-in-out';
  };
  //리뷰쓰기
  const changeComment = e => {
    setComment(e.target.value);
  };

  const commentInfo = () => {
    const input = {
      id: random(),
      value: comment,
      up: false,
    };
    setSaveComment([...saveComment, input]);
    setNumberComments(numberComments + 1);
  };

  const random = () => {
    return Math.random().toString(36).substr(2, 16);
  };

  const handleSubmitBtn = () => {
    commentInfo();
    setComment('');
  };

  const commitCreate = e => {
    return e.key === 'Enter' && comment.length > 3
      ? handleSubmitBtn() && removeList()
      : '';
  };
  // const commitCreate = e => {
  //   if (e.key === 'Enter' && 300 > comment.length > 3) {
  //     commentInfo(), setComment('');
  //   } else {
  //     alert('ede');
  //   }
  // };

  const postButton = () => {
    return comment.length > 3
      ? (commentInfo(), setComment('')) && removeList()
      : '';
  };

  // const likeToggle = item => {
  //   saveComment.filter(items => {
  //     return items.id === item.id && !item.up
  //       ? ((item.up = !item.up), setNumberLike(numberlike + 1))
  //       : items.id === item.id && item.up
  //       ? ((item.up = !item.up), setNumberLike(numberlike - 1))
  //       : item;
  //   });
  // };
  //다른걸로 해보자 ...

  return (
    <React.Fragment>
      <S.ReviewBack>
        <S.LeftOutlinedStyled />
      </S.ReviewBack>
      <S.ReviewMap src="/images/reviewmap.png" alt="map" />
      <S.ReviewTitleWrap>
        <S.ReviewTitle>청담동 코코건물 1층</S.ReviewTitle>
        <S.TitleAddress>강남구 도산대로 451</S.TitleAddress>
        <S.AddressExplain>입구서 30m 직진후 오른쪽,,</S.AddressExplain>
        <S.ReviewAssess>★ 4.5 &nbsp;&nbsp;리뷰 3개</S.ReviewAssess>
        <S.ShareAndLike>
          <S.SharePlace>
            <ShareAltOutlined />
            &nbsp;&nbsp;공유하기
          </S.SharePlace>
          <S.LikePlace onClick={handleHeartFill}>
            {isHeart ? <HeartOutlined /> : <HeartFilled color="#9CD5C2" />}
            &nbsp;&nbsp;찜하기
          </S.LikePlace>
        </S.ShareAndLike>
      </S.ReviewTitleWrap>

      <S.SubTitleWrap>
        <S.InfoRequest type="button">정보 수정 요청</S.InfoRequest>
        <S.ToiletImgList>
          <S.ToiletImgTitle>화장실 사진</S.ToiletImgTitle>
          <S.ReviewToiletWrap>
            <S.ToiletDetailImg src="/images/toilet4.png" alt="toiletImg1" />
            <S.ToiletDetailImg src="/images/toilet6.png" alt="toiletImg2" />
            <S.ToiletDetailImg src="/images/toilet4.png" alt="toiletImg3" />
            <S.ToiletDetailImg src="/images/toilet6.png" alt="toiletImg4" />
            <S.ToiletDetailImg src="/images/toilet4.png" alt="toiletImg5" />
            <S.ToiletDetailImg src="/images/toilet6.png" alt="toiletImg6" />
          </S.ReviewToiletWrap>
        </S.ToiletImgList>
        <S.ReviewInfoTitle>기본 정보</S.ReviewInfoTitle>
        <S.InfoContainer>
          <S.OpenTimeWrap>
            <S.OpenTimeTitle>개방시간</S.OpenTimeTitle>
            <S.OpenTime>09:00 ~ 18:00</S.OpenTime>
          </S.OpenTimeWrap>
          <S.ManageWrap>
            <S.ManageTitle>관리기관</S.ManageTitle>
            <S.ManageName>현대백화점 관리센터</S.ManageName>
          </S.ManageWrap>
          <S.ManageWrap>
            <S.ManageTitle>전화번호</S.ManageTitle>
            <S.ManageName>0123-3333</S.ManageName>
          </S.ManageWrap>
          <S.ManageWrap>
            <S.ManageTitle>남녀공용 유무</S.ManageTitle>
            <S.ManageName>남녀 분리</S.ManageName>
          </S.ManageWrap>
          <S.ManageWrap>
            <S.ManageTitle>상세정보 더보기</S.ManageTitle>
            <S.ManageName onClick={handleOpenMore}>
              {isMoreOpen ? '▲' : '▼'}
            </S.ManageName>
          </S.ManageWrap>
        </S.InfoContainer>

        {isMoreOpen && (
          <S.InfoMoreContainer>
            {MoreDetailData.map(({ id, title, female, male }) => (
              <S.MoreContainer key={id}>
                <S.StyledTable>
                  <S.StyledTr>
                    <S.StyledTh>{title}</S.StyledTh>
                    <S.StyledTd>{female}</S.StyledTd>
                    <S.StyledTd>{male}</S.StyledTd>
                  </S.StyledTr>
                </S.StyledTable>
              </S.MoreContainer>
            ))}
          </S.InfoMoreContainer>
        )}
        <S.InfoMoreDate>마지막 업데이트 날짜 : 23.01.23</S.InfoMoreDate>
        <S.ViewReview>
          <S.ViewReviewNumber>리뷰 3개</S.ViewReviewNumber>
          <S.ViewReviewWrap>
            <S.ViewReviewDate>2023.03.12</S.ViewReviewDate>
            <S.ViewReviewName>♀ 👩🏻</S.ViewReviewName>
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
            <S.ViewReviewMent>
              생각보다 쓸만해요 근데 휴지가 별로 많지 않아요🙁
            </S.ViewReviewMent>
            <S.LikeReview onClick={handleLikeFill}>
              {isLike ? (
                <S.StyledLikeOutlined />
              ) : (
                <LikeFilled style={{ color: '#9CD5C2' }} />
              )}

              <S.LikeReviewNumber>30</S.LikeReviewNumber>
            </S.LikeReview>
          </S.ViewReviewWrap>
          {/* Comment Component */}
          {saveComment.map(item => (
            <S.ViewReviewWrap key={item.id}>
              <Comment
                item={item}
                key={item.id}
                saveComment={saveComment}
                setSaveComment={setSaveComment}
                numberComments={numberComments}
                setNumberComments={setNumberComments}
              />
            </S.ViewReviewWrap>
          ))}
          {/* 리뷰쓰기모달 */}
        </S.ViewReview>
      </S.SubTitleWrap>
      <S.ListContainer ref={listContainer}>
        {isOpenList ? (
          <S.WriteReviewWrap>
            <S.Click onClick={dragListContainer} />
            <S.ListThumbnailTitle>Review</S.ListThumbnailTitle>
          </S.WriteReviewWrap>
        ) : (
          <S.WriteReviewWrap>
            <S.Click onClick={dragListContainer} />
            <S.ReviewAssessStar>
              <S.RateStyled allowHalf defaultValue={5} />
            </S.ReviewAssessStar>
            <S.ReviewBtnContainer>
              <S.StyledButton type="default" shape="round" color="lightgray">
                24시 개방
              </S.StyledButton>
              <Button type="default" shape="round">
                향기로운
              </Button>
              <S.ChosenButton type="button">휴지가 많은</S.ChosenButton>
            </S.ReviewBtnContainer>
            <S.UploadReviewComment>
              <S.WriteReviewComment
                type="text"
                placeholder="리뷰를 남겨주세요"
                value={comment}
                onChange={changeComment}
                onKeyPress={commitCreate}
              />
              <S.UploadReview onClick={postButton} type="button">
                게시
              </S.UploadReview>
            </S.UploadReviewComment>
          </S.WriteReviewWrap>
        )}
      </S.ListContainer>
      <S.ReviewNav>리뷰쓰기</S.ReviewNav>
    </React.Fragment>
  );
};

export default Review;
