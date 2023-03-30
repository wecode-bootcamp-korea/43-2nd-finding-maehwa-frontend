import React from 'react';
import './LibraryListMap.style';
import * as S from './LibraryListMap.style';

const LibraryListMap = ({ id, name, created_at, deleteCartList }) => {
  return (
    <S.WishlistContainer key={id}>
      <S.Img src="#" alt="LigbraryListImg" />
      <S.PlaceDateContainer>
        <S.Place>{name}</S.Place>
        <S.DateDeleteWrapper>
          <S.Date>{created_at}</S.Date>
          <S.StyledDeleteOutlined
            onClick={() => {
              deleteCartList(id);
              window.location.reload();
            }}
          />
        </S.DateDeleteWrapper>
      </S.PlaceDateContainer>
    </S.WishlistContainer>
  );
};

export default LibraryListMap;
