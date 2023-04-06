import React, { useEffect, useState } from 'react';
import { SearchOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import * as S from './Library.style';
import LibraryListMap from './LibraryListMap';
import { Link } from 'react-router-dom';
import LIBRARYLISTIMG from './LIBRARYLISTIMG';

const Library = ({
  text,
  data,
  type,
  setModalOpen,
  setIsWishListOpen,
  makeList,
}) => {
  const [dataList, setDataList] = useState([]);
  const closeModal = () => {
    setModalOpen(false);
  };

  console.log(data);

  const handelWishList = () => {
    setIsWishListOpen(true);
  };

  useEffect(() => {
    fetch('http://10.58.52.70:3001/users/libraries', {
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
  console.log(dataList);

  function deleteCartList(id) {
    fetch(`http://10.58.52.70:3001/users/libraries/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          const newArr = [...dataList];
          setDataList(newArr.filter(list => list.id !== id));
        }
      });
  }

  return (
    <React.Fragment>
      <S.Title title={type === '회원가입'}>위시리스트</S.Title>
      {type === '회원가입' && <S.StyledCloseOutlined onClick={closeModal} />}

      {type === '회원가입' && (
        <S.TitleWrapper onClick={handelWishList}>
          <S.Wrapperr src="./images/plus2 (1).png" />
          <S.TitleWishListStorage>
            새로운 위시리스트 만들기
          </S.TitleWishListStorage>
        </S.TitleWrapper>
      )}

      <S.WishlistWrapper margin={type === '회원가입'}>
        {dataList &&
          dataList.map((info, id) => {
            return (
              <LibraryListMap
                id={info.id}
                key={info.id}
                name={info.name}
                created_at={info.created_at}
                makeList={makeList}
                deleteCartList={deleteCartList}
                src={LIBRARYLISTIMG.map(ele => ele.src)}
              />
            );
          })}
      </S.WishlistWrapper>
      {/* <S.WishlistWrapper
        style={{ cursor: 'pointer', marginTop: '-361px', marginLeft: '-5px' }}
      >
        <S.WishlistContainer
          Style={{ marginBottom: '50px', marginLeft: '33px' }}
        >
          <S.Img
            style={{ width: '98px', height: '93px' }}
            src="https://images.unsplash.com/photo-1656646523588-e5e2575e2ec3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="LigbraryListImg"
          />

          <S.PlaceDateContainer
            style={{
              marginLeft: '40px',
              marginTop: '10px',
            }}
          >
            <S.Place style={{ fontSize: '22px' }}>강남역 2호선</S.Place>
            <S.DateDeleteWrapper style={{ paddingTop: '15px' }}>
              <S.Date style={{ fontSize: '20px' }}>2023-09-28</S.Date>
              <S.StyledDeleteOutlined
                style={{ paddingLeft: '15px', fontSize: '22px' }}
              />
            </S.DateDeleteWrapper>
          </S.PlaceDateContainer>
        </S.WishlistContainer>
      </S.WishlistWrapper> */}
      {type === '로그인' && (
        <S.Nav>
          <SearchOutlined style={{ fontSize: '30px', color: '#9CD5C2' }} />
          <S.HeartOutlinedStyled
            style={{ fontSize: '30px', color: 'lightgray' }}
          />
          <UserOutlined style={{ fontSize: '30px', color: 'lightgray' }} />
        </S.Nav>
      )}
    </React.Fragment>
  );
};

export default Library;
