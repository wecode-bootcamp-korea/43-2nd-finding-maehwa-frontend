import React from 'react';
import './LibraryListMap.style';
import * as S from './LibraryListMap.style';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const LibraryListMap = ({
  id,
  name,
  created_at,
  deleteCartList,
  type,
  src,
}) => {
  return (
    <S.WishlistContainer key={id}>
      <Link to={`/wishlist/${id}`}>
        <S.Img src={src} alt="LigbraryListImg" />
      </Link>
      <S.PlaceDateContainer>
        <S.Place>{name}</S.Place>
        <S.DateDeleteWrapper>
          <S.Date>{created_at.split('T')[0]}</S.Date>
          <S.StyledDeleteOutlined
            delete={type === '회원가입'}
            onClick={() => {
              deleteCartList(id);
            }}
          />
        </S.DateDeleteWrapper>
      </S.PlaceDateContainer>
    </S.WishlistContainer>
  );
};

export default LibraryListMap;
