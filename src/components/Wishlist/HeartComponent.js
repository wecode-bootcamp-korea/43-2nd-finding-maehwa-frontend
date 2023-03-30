import React, { useState } from 'react';
import * as S from './HeartComponentStyle';
const HeartComponent = props => {
  const [isHeart, setIsHeart] = useState(false);
  const toggleHeart = () => {
    setIsHeart(prev => !prev);
  };

  return (
    <div>
      {isHeart ? (
        <S.StyledHeartTwoTone onClick={toggleHeart} />
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
