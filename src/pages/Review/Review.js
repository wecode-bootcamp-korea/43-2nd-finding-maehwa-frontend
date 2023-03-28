import React, { useState, useRef } from 'react';
import { Button, Rate } from 'antd';
import {
  SearchOutlined,
  UserOutlined,
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
  const [comment, setComment] = useState('');
  const [saveComment, setSaveComment] = useState([]);
  const [numberComments, setNumberComments] = useState(0);
  const listContainer = useRef(null);
  const [inputValue, setInputValue] = useState({
    Nickname: '',
    reviewComment: '',
  });
  const { Nickname, reviewComment } = inputValue;

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
    listContainer.current.style = 'height: 100%;';
    listContainer.current.style.transition = 'all 0.3s ease-in-out';
  };
  //리뷰쓰기
  const changeComment = e => {
    setComment(e.target.value);
  };

  const commitCreate = e => {
    return e.key === 'Enter' && comment.length > 3
      ? (commentInformation(), setComment(''))
      : '';
  };

  const postButton = () => {
    return comment.length > 3 ? (commentInformation(), setComment('')) : '';
  };

  const commentInformation = () => {
    const input = {
      id: 'id',
      value: comment,
    };
    setSaveComment([...saveComment, input]);
    setNumberComments(numberComments + 1);
  };

  return (
    <React.Fragment>
      <S.ReviewNav>
        <S.LeftOutlinedStyled />
      </S.ReviewNav>
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
            {MoreDetailData.map(({ id, title, YorN }) => (
              <S.MoreContainer key={id}>
                <S.StyledTable>
                  <S.StyledTableRow>
                    <S.StyledTh>{title}</S.StyledTh>
                    <S.StyledTd>{YorN}</S.StyledTd>
                    <S.StyledTd>{YorN}</S.StyledTd>
                  </S.StyledTableRow>
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
          {/* 리뷰쓰기모달 */}
          <S.ViewReviewWrap>
            <S.ReviewAssessStar>
              <S.RateStyled allowHalf defaultValue={2.5} />
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
              {saveComment.map(item => (
                <Comment item={item} key={item.id} saveComment={saveComment} />
              ))}
              <S.WriteReviewComment
                type="text"
                placeholder="리뷰를 남겨주세요"
                value={comment}
                onChange={changeComment}
                onKeyPress={commitCreate}
              />
              <S.UploadReview onClick={postButton}>게시</S.UploadReview>
            </S.UploadReviewComment>
          </S.ViewReviewWrap>
        </S.ViewReview>
      </S.SubTitleWrap>
      <S.ListContainer onClick={dragListContainer} ref={listContainer}>
        <S.ListThumbnailTitle>Review</S.ListThumbnailTitle>
      </S.ListContainer>
      <S.Nav>
        <SearchOutlined style={{ fontSize: '30px', color: '#9CD5C2' }} />
        <S.HeartOutlinedStyled
          style={{ fontSize: '30px', color: 'lightgray' }}
        />
        <UserOutlined style={{ fontSize: '30px', color: 'lightgray' }} />
      </S.Nav>
    </React.Fragment>
  );
};

export default Review;
