import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Button } from 'antd';
import { StarFilled, LikeFilled } from '@ant-design/icons';
import { MoreDetailData } from './MoreDetail';
import * as S from './ReviewStyle';
import { useNavigate } from 'react-router-dom';
import ImgModal from '../Review/ImgModal';
import Comment from './Comment';
import exportAtom from '../Atoms';

const Review = () => {
  const navigate = useNavigate();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(() => false);
  const [isHeart, setIsHeart] = useState(true);
  const [isLike, setIsLike] = useState(true);
  const [detailList, setDetailList] = useState([]);
  const { commentListState } = exportAtom;
  const [commentList, setCommentList] = useRecoilState(commentListState);
  const [loading, setLoading] = useState(true);

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
    fetch('http://10.58.52.139:3001/places/1', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setDetailList(data.result.place[0]);
        setLoading(false);
        setCommentList(data.result.place[0].reviewList);
      });
  }, [commentList]);
  if (loading) return <div>loading</div>;

  // useEffect(() => {
  //   fetch('http://10.58.52.139:3001/places/1', {
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       Authorization: localStorage.getItem('token'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // });
  // console.log(detailList.reviewList);
  return (
    <React.Fragment>
      <S.ReviewNav>
        <S.LeftOutlinedStyled />
      </S.ReviewNav>
      <S.Scroll>
        <S.ReviewMap src="/images/reviewmap.png" alt="map" />
        <S.ReviewTitleWrap>
          <S.TitleWrap>
            <S.ReviewTitle>{detailList.name}</S.ReviewTitle>
            <S.ShareAltOutlinedStyled />
          </S.TitleWrap>

          {isOpen && <ImgModal setIsOpen={setIsOpen} />}
          <S.CopyAddress>
            <S.TitleAddress>{detailList.address}</S.TitleAddress>
            <S.CopyOutlinedStyled />
          </S.CopyAddress>

          <S.AddressExplain>{detailList.description}</S.AddressExplain>
          <S.ReviewAssess>
            ★ {Number(detailList.avgRating).toFixed(2)} &nbsp;&nbsp;리뷰{' '}
            {detailList.countReview}개
          </S.ReviewAssess>
          <S.PlaceTag>
            {detailList.mostLikedTags.map(info => (
              <React.Fragment key={info.tagId}>
                <S.ChosenButton type="button">
                  {info.tagName} {info.tagName === '찾기 쉬운' && '👀'}{' '}
                  {info.tagName === '휴지 많음' && '🧻'}
                  {info.tagName === '향기로운' && '🎀'}
                </S.ChosenButton>
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
                src="/images/toilet6.png"
                alt="toiletImg1"
                onClick={() => setIsOpen(true)}
              />
              <S.ToiletDetailImg src="/images/toilet4.png" alt="toiletImg2" />
              <S.ToiletDetailImg src="/images/toilet6.png" alt="toiletImg3" />
              <S.ToiletDetailImg src="/images/toilet4.png" alt="toiletImg4" />
              <S.ToiletDetailImg src="/images/toilet6.png" alt="toiletImg3" />
              <S.ToiletDetailImg src="/images/toilet4.png" alt="toiletImg4" />
            </S.ReviewToiletWrap>
          </S.ToiletImgList>
          <S.ReviewInfoTitle>기본 정보</S.ReviewInfoTitle>
          <S.InfoContainer>
            {detailList.basicInformation.map(info => {
              return (
                <React.Fragment key={info.id}>
                  <S.ManageWrap>
                    <S.ManageTitle>{info.title} </S.ManageTitle>
                    <S.ManageName>{info.content} </S.ManageName>
                  </S.ManageWrap>
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
              리뷰 {detailList?.countReview}개
            </S.ViewReviewNumber>

            {/* Comment Component */}
            {commentList.map(item => (
              <S.ViewReviewWrap key={item.id}>
                <Comment item={item} key={item.id} />
              </S.ViewReviewWrap>
            ))}
          </S.ViewReview>
        </S.SubTitleWrap>
        <S.NavHeight>nav</S.NavHeight>
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
