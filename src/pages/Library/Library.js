import React from 'react';
import LibraryList from './LibraryList';
import { SearchOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import * as S from './Library.style';

const Library = () => {
  return (
    <React.Fragment>
      <S.Title>위시리스트</S.Title>
      <S.WishlistWrapper>
        {LibraryList.map(({ id, title, date }) => {
          return (
            <S.WishlistContainer key={id}>
              <S.Img src="#" alt="LigbraryListImg" />
              <S.PlaceDateContainer>
                <S.Place>{title}</S.Place>
                <S.Date>{date}</S.Date>
              </S.PlaceDateContainer>
            </S.WishlistContainer>
          );
        })}
      </S.WishlistWrapper>
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

export default Library;
