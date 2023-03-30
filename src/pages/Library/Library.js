import React, { useEffect, useState } from 'react';
import LibraryList from './LibraryList';
import { SearchOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import * as S from './Library.style';

const Library = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNjgwMTc3MTc2LCJleHAiOjE2ODAyNjM1NzZ9.vJsCvd05-H7ED4InxYIVZYw3IabnzJMzdr60zCs_Ssk'
    );
    const getToken = localStorage.getItem('token');
    console.log(getToken);

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
        console.log(dataList);
      });
  }, []);

  return (
    <React.Fragment>
      <S.Title>위시리스트</S.Title>
      <S.WishlistWrapper>
        {dataList.map(info => {
          return (
            <S.WishlistContainer key={info.id}>
              <S.Img src="#" alt="LigbraryListImg" />
              <S.PlaceDateContainer>
                <S.Place>{info.name}</S.Place>
                <S.Date>{info.created_at}</S.Date>
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
