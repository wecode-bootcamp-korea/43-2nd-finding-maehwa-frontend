import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import WISHLISTDATA from './WISHLISTDATA';
import * as S from './Wishlist.style';
import HeartComponent from '../../components/Wishlist/HeartComponent';

import {
  LeftOutlined,
  SearchOutlined,
  HeartOutlined,
  UserOutlined,
} from '@ant-design/icons';

const Wishlist = () => {
  const params = useParams();
  const userId = params.id;

  const [wishListData, setWishListData] = useState([]);
  const [placeName, setPlaceName] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.52.144:3001/users?libraryId=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setWishListData(data.data[0].places);
        setPlaceName(data.data);
        // console.log(data.data);
      });
  }, [userId]);

  return (
    <React.Fragment>
      <Link to="/library">
        <S.LeftArrowWrapper>
          <LeftOutlined style={{ fontSize: '26px' }} />
        </S.LeftArrowWrapper>
      </Link>
      {placeName.map((ele, id) => {
        return (
          <S.TitleWrapper key={ele.libraryId}>
            <S.RepresentativeTitle>{ele.libraryName}</S.RepresentativeTitle>
            <S.SubTitle>자주가는 장소를 등록해서 편하게 살펴보세요.</S.SubTitle>
          </S.TitleWrapper>
        );
      })}

      {/* <S.TitleWrapper>
        <S.RepresentativeTitle>강남역 2호선</S.RepresentativeTitle>
        <S.SubTitle>자주가는 장소를 등록해서 편하게 살펴보세요.</S.SubTitle>
      </S.TitleWrapper> */}
      <S.MapWrapper>
        {wishListData.map(info => {
          return (
            <React.Fragment key={info.placeId}>
              <S.ImgHeartWrapper>
                <S.Img src="#" alt={info.errMsg} />
                <HeartComponent
                // data={{ id, src, place, review, errMsg, rating }}
                />
              </S.ImgHeartWrapper>
              <S.DetailReviewPlaceContain>
                <S.Place style={{ fontWeight: '700' }}>
                  {info.placeName}
                </S.Place>
                <S.DetailWrapper>
                  <S.Rating>★ {info.reviewRating}</S.Rating>
                  <S.Review>{`리뷰 ${info.reviewCount}개`}</S.Review>
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
