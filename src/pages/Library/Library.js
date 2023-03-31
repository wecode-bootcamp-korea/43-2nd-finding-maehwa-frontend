import React, { useEffect, useState } from 'react';
import LibraryList from './LibraryList';
import { SearchOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import * as S from './Library.style';
import { Link } from 'react-router-dom';

const Library = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    //변수 저장
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNjgwMjI4OTM1LCJleHAiOjE2ODAzMTUzMzV9.Jyf00tYNmGTYB-GWpIlARxHdU6-7hEcHhZlVWH3y3Es'
    );
    //변수 저장 후 사용
    const getToken = localStorage.getItem('token');

    fetch('http://10.58.52.144:3001/users/libraries', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setDataList(data.data);
      });
  }, []);

  //fetch('api주소')
  //.then(res => res.json())
  //.then(res => )

  return (
    <React.Fragment>
      <S.Title>위시리스트</S.Title>
      <S.WishlistWrapper>
        {dataList.map(({ id, name, created_at }) => {
          return (
            <Link key={id} to={`/wishlist/${id}`}>
              <S.WishlistContainer>
                <S.Img src="#" alt="LigbraryListImg" />
                <S.PlaceDateContainer>
                  <S.Place>{name}</S.Place>
                  <S.Date>{created_at}</S.Date>
                </S.PlaceDateContainer>
              </S.WishlistContainer>
            </Link>
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
