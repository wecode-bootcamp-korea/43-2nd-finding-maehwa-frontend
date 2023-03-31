import React from 'react';
import * as S from '../Review/TagStyle';

const Tag = ({ id, tagName, isChecked, clickTag }) => {
  const handleClick = () => {
    clickTag(id);
  };

  return (
    <S.TagButton onClick={handleClick}>
      {!isChecked ? (
        <S.StyledButton type="default" shape="round">
          {tagName}
        </S.StyledButton>
      ) : (
        <S.CheckedButton type="default" shape="round">
          {tagName}
        </S.CheckedButton>
      )}
    </S.TagButton>
  );
};

export default Tag;
