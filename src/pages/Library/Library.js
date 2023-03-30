import React, { useEffect, useState } from 'react';
// import LibraryList from './LibraryList';
import LibraryListMap from './LibraryListMap';
import { SearchOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import * as S from './Library.style';

const Library = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.144:3001/users/libraries', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setDataList(data.data);
      });
  }, []);

  function deleteCartList(id) {
    fetch(`http://10.58.52.144:3001/users/libraries?libraryId=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.message) {
          alert();
          setDataList(data.message);
        }
      });
  }

  return (
    <React.Fragment>
      <S.Title>위시리스트</S.Title>
      <S.WishlistWrapper>
        {dataList.map(info => {
          return (
            <LibraryListMap
              id={info.id}
              key={info.id}
              name={info.name}
              created_at={info.created_at}
              deleteCartList={deleteCartList}
            />
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
