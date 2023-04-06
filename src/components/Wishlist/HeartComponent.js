import React, { useState } from 'react';
import * as S from './HeartComponent.style';
import { useRecoilState } from 'recoil';
import exportAtom from '../../pages/Atoms';

const HeartComponent = ({
  toggleHeart,
  deleteWishList,
  placeId,
  wishListData,
}) => {
  const { heartState } = exportAtom;
  const [isHeart, setIsHeart] = useRecoilState(heartState);
  // const [isHeart, setIsHeart] = useState(true);
  // const toggleHeart = () => {
  //   setIsHeart(prev => !prev);
  // };

  const isWishPlace = wishListData.filter(list => list.placeId === placeId);

  return (
    <div>
      {isWishPlace.length >= 1 ? (
        <S.StyledHeartTwoTone
          onClick={() => {
            deleteWishList(placeId);
          }}
        />
      ) : (
        <S.StyledHeartOutlined
          style={{ color: '#FFFFFF' }}
          onClick={toggleHeart}
        />
      )}
    </div>
  );
};

export default HeartComponent;
