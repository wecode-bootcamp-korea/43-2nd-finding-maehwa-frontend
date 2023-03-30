import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { StarFilled, LikeFilled } from '@ant-design/icons';
import { MoreDetailData } from './MoreDetail';
import * as S from './ReviewStyle';
import { useNavigate } from 'react-router-dom';
import ImgModal from '../Review/ImgModal';

const Review = () => {
  const navigate = useNavigate();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(() => false);
  const [isHeart, setIsHeart] = useState(true);
  const [isLike, setIsLike] = useState(true);
  const [detailList, setDetailList] = useState([]);

  const handleFillNav = () => {
    setIsHeart(isHeart => !isHeart);
  };

  const handleLikeFill = () => {
    setIsLike(isLike => !isLike);
  };

  const handleOpenMore = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  const goToWrite = () => {
    navigate('/write-review');
  };

  useEffect(() => {
    fetch('./data/reviewData.json')
      .then(res => res.json())
      .then(data => setDetailList(data[0].result.place));
  }, []);
  return (
    <React.Fragment>
      <S.ReviewNav>
        <S.LeftOutlinedStyled />
      </S.ReviewNav>
      <S.Scroll>
        <S.ReviewMap src="/images/reviewmap.png" alt="map" />
        <S.ReviewTitleWrap>
          <S.TitleWrap>
            <S.ReviewTitle>{detailList[0]?.name}</S.ReviewTitle>
            <S.ShareAltOutlinedStyled />
          </S.TitleWrap>

          {isOpen && <ImgModal setIsOpen={setIsOpen} />}
          <S.CopyAddress>
            <S.TitleAddress>{detailList[0]?.address}</S.TitleAddress>
            <S.CopyOutlinedStyled />
          </S.CopyAddress>

          <S.AddressExplain>{detailList[0]?.description}</S.AddressExplain>
          <S.ReviewAssess>
            ★ {Number(detailList[0]?.avgRating).toFixed(2)} &nbsp;&nbsp;리뷰{' '}
            {detailList[0]?.countReview}개
          </S.ReviewAssess>

          <S.PlaceTag>
            {detailList.map(info => (
              <React.Fragment key={info.id}>
                {info.mostLikedTags.map(item => (
                  <React.Fragment key={item.id}>
                    <S.ChosenButton type="button">
                      {item.tagName}
                    </S.ChosenButton>
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </S.PlaceTag>
        </S.ReviewTitleWrap>

        <S.SubTitleWrap>
          <S.InfoRequest type="button">정보 수정 요청</S.InfoRequest>
          <S.ToiletImgList>
            <S.ToiletImgTitle>화장실 사진</S.ToiletImgTitle>

            <S.ReviewToiletWrap>
              <S.ToiletDetailImg
                src="/images/toilet4.png"
                alt="toiletImg1"
                onClick={() => setIsOpen(true)}
              />
              <S.ToiletDetailImg src="/images/toilet6.png" alt="toiletImg2" />
              <S.ToiletDetailImg src="/images/toilet4.png" alt="toiletImg3" />
              <S.ToiletDetailImg src="/images/toilet6.png" alt="toiletImg4" />
            </S.ReviewToiletWrap>
          </S.ToiletImgList>
          <S.ReviewInfoTitle>기본 정보</S.ReviewInfoTitle>
          <S.InfoContainer>
            {detailList.map(info => {
              return (
                <React.Fragment key={info.id}>
                  {info.basicInformation.map(item => (
                    <React.Fragment key={item.id}>
                      <S.ManageWrap>
                        <S.ManageTitle>{item.title} </S.ManageTitle>
                        <S.ManageName>{item.content} </S.ManageName>
                      </S.ManageWrap>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              );
            })}
            <S.ManageWrap>
              <S.ManageTitle>상세정보 더보기</S.ManageTitle>

              <S.ClickMore onClick={handleOpenMore}>
                {isMoreOpen ? '▲' : '▼'}
              </S.ClickMore>
            </S.ManageWrap>
          </S.InfoContainer>
          {isMoreOpen && (
            <S.InfoMoreContainer>
              {MoreDetailData.map(({ id, title, female, male }) => (
                <S.Table key={id}>
                  <S.Thead>
                    <S.Tr>
                      <S.StyledTh>{title}</S.StyledTh>
                    </S.Tr>
                  </S.Thead>

                  <S.StyledTr>
                    <S.StyledTdOne>{female}</S.StyledTdOne>
                    <S.StyledTd>{male}</S.StyledTd>
                  </S.StyledTr>
                </S.Table>
              ))}
            </S.InfoMoreContainer>
          )}
          <S.InfoMoreDate>마지막 업데이트 날짜 : 23.01.23</S.InfoMoreDate>
          <S.ViewReview>
            <S.ViewReviewNumber>
              리뷰 {detailList[0]?.countReview}개
            </S.ViewReviewNumber>
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
                <S.ChosenButtonStyled type="button">
                  휴지가 많은
                </S.ChosenButtonStyled>
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
          </S.ViewReview>
        </S.SubTitleWrap>
      </S.Scroll>
      <S.Nav>
        <S.LikeNav onClick={handleFillNav}>
          {isHeart ? <S.HeartOutlinedStyled /> : <S.HeartFilledNav />}
          <S.LikeNavButton>찜하기</S.LikeNavButton>
        </S.LikeNav>

        <S.OpenWriteReview onClick={goToWrite}>리뷰쓰기</S.OpenWriteReview>
      </S.Nav>
    </React.Fragment>
  );
};

export default Review;
