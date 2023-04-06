import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './Wishlist.style';
import { Link, useParams } from 'react-router-dom';
import {
  LeftOutlined,
  SearchOutlined,
  HeartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import WishListMap from './WishListMap';
import exportAtom from '../../pages/Atoms';

const Wishlist = () => {
  const { heartState } = exportAtom;

  const [isHeart, setIsHeart] = useRecoilState(heartState);

  // const toggleHeart = () => {
  //   setIsHeart(prev => !prev);
  // };

  const params = useParams();

  const userId = params.id;

  const [wishListData, setWishListData] = useState([]);

  const [placeName, setPlaceName] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.52.70:3001/users?libraryId=${userId}`, {
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
      });
  }, [userId]);

  function deleteWishList(placeId) {
    console.log(123);
    fetch(`http://10.58.52.70:3001/users/libraries/places/${placeId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(
        data => {
          console.log(data);
          if (data.message) {
            const newArr = [...wishListData];
            setWishListData(newArr.filter(list => list.placeId !== placeId));
          }
        },
        [wishListData]
      );
  }

  return (
    <React.Fragment>
      <Link to="/library" style={{ textDecoration: 'none' }}>
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

      <S.MapWrapper>
        {wishListData.map(info => {
          return (
            <WishListMap
              key={info.placeId}
              placeName={info.placeName}
              reviewRating={info.reviewRating}
              reviewCount={info.reviewCount}
              deleteWishList={deleteWishList}
              placeId={info.placeId}
              // toggleHeart={toggleHeart}
              placeImage={info.placeImage}
              wishListData={wishListData}
            />
          );
        })}
      </S.MapWrapper>

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

export default Wishlist;
