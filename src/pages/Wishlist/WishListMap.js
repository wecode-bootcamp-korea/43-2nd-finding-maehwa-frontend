import React from 'react';
import HeartComponent from '../../components/Wishlist/HeartComponent';
import * as S from './WishListMap.style';

const WishListMap = ({
  toggleHeart,
  placeId,
  placeName,
  reviewRating,
  reviewCount,
  deleteWishList,
  placeImage,
  wishListData,
}) => {
  return (
    <React.Fragment key={placeId}>
      <S.ImgHeartWrapper>
        <S.Img src={placeImage} />
        <HeartComponent
          deleteWishList={deleteWishList}
          toggleHeart={toggleHeart}
          placeId={placeId}
          wishListData={wishListData}
        />
      </S.ImgHeartWrapper>
      <S.DetailReviewPlaceContain>
        <S.Place
          style={{ fontWeight: '700', fontSize: '24px', paddingBottom: '8px' }}
        >
          {placeName}
        </S.Place>
        <S.DetailWrapper>
          <S.Rating>★ {reviewRating}</S.Rating>
          <S.Review>{`리뷰 ${reviewCount}개`}</S.Review>
        </S.DetailWrapper>
      </S.DetailReviewPlaceContain>
    </React.Fragment>
  );
};

export default WishListMap;
