import React from 'react';
import HeartComponent from '../../components/Wishlist/HeartComponent';
import WISHLISTDATA from './WISHLISTDATA';
import * as S from './Wishlist.style';
import {
  LeftOutlined,
  SearchOutlined,
  HeartOutlined,
  UserOutlined,
} from '@ant-design/icons';

const Wishlist = () => {
  return (
    <React.Fragment>
      <S.LeftArrowWrapper>
        <LeftOutlined style={{ fontSize: '26px' }} />
      </S.LeftArrowWrapper>
      <S.TitleWrapper>
        <S.RepresentativeTitle>강남역 2호선</S.RepresentativeTitle>
        <S.SubTitle>자주가는 장소를 등록해서 편하게 살펴보세요.</S.SubTitle>
      </S.TitleWrapper>
      <S.MapWrapper>
        {WISHLISTDATA.map(({ id, src, place, review, errMsg, rating }) => {
          return (
            <React.Fragment key={id}>
              <S.ImgHeartWrapper>
                <S.Img src={src} alt={errMsg} />
                <HeartComponent
                  data={{ id, src, place, review, errMsg, rating }}
                />
              </S.ImgHeartWrapper>
              <S.DetailReviewPlaceContain>
                <S.Place style={{ fontWeight: '700' }}>{place}</S.Place>
                <S.DetailWrapper>
                  <S.Rating>★ {rating}</S.Rating>
                  <S.Review>{`리뷰 ${review}개`}</S.Review>
                </S.DetailWrapper>
              </S.DetailReviewPlaceContain>
            </React.Fragment>
          );
        })}
      </S.MapWrapper>
      <S.Nav>
        <S.Wrapper>
          <SearchOutlined style={{ color: '#C5C5C5', fontSize: '24px' }} />
          <HeartOutlined style={{ color: '#C5C5C5', fontSize: '24px' }} />
          <UserOutlined style={{ color: '#C5C5C5', fontSize: '24px' }} />
        </S.Wrapper>
      </S.Nav>
    </React.Fragment>
  );
};

export default Wishlist;
