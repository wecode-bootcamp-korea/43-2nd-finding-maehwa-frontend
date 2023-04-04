import React, { useState, useRef, useEffect } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import * as S from './PlaceListStyle';

const { Search } = Input;
const onSearch = value => console.log(value);

const App = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const lastItemRef = useRef();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const tags = 0;
    const offset = page;
    fetch(
      `http://10.58.52.70:3001/places/visitor?tags=${tags}&offset=${offset}`
    )
      .then(response => response.json())
      .then(data => {
        setItems(data.data);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    isIntersecting && setPage(prevPage => prevPage + 1);
  });

  useEffect(() => {
    lastItemRef.current && fetchMoreObserver.observe(lastItemRef.current);
    return () => {
      lastItemRef.current && fetchMoreObserver.unobserve(lastItemRef.current);
    };
  }, [lastItemRef.current]);

  useEffect(() => {
    if (page > 1) {
      setLoading(true);
      const tags = 0;
      const offset = page;
      fetch(
        `http://10.58.52.70:3001/places/visitor?tags=${tags}&offset=${offset}`
      )
        .then(response => response.json())
        .then(data => {
          setItems(prevItems => [...prevItems, ...data.data]);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [page]);

  return (
    <AppContainer>
      <S.SearchContainer direction="vertical">
        <Search
          placeholder="검색어를 입력해주세요."
          onSearch={onSearch}
          style={{
            width: 330,
          }}
        />
      </S.SearchContainer>

      <S.ButtonContainer>
        <S.StyledButton type="default" shape="round">
          24시 개방
        </S.StyledButton>
        <Button type="default" shape="round">
          향기로운
        </Button>
        <Button type="default" shape="round">
          휴지가 넉넉한
        </Button>
        <Button type="default" shape="circle">
          ∙∙∙
        </Button>
      </S.ButtonContainer>

      <S.ListTitle>가장 가까운 화장실 ⚡️</S.ListTitle>
      <S.ListContainer>
        <S.ListBox>
          {items.map((item, index) => {
            return (
              <S.ListWrapper key={`item_${index}`}>
                <S.ListImg
                  src={item.placeList[0].placeThumbnail}
                  alt="toiletImage"
                />
                {item.placeList[0].placeName}
              </S.ListWrapper>
            );
          })}
          <div ref={lastItemRef} />
        </S.ListBox>
      </S.ListContainer>

      <S.Nav>
        <SearchOutlined style={{ fontSize: '30px', color: '#9CD5C2' }} />
        <S.HeartOutlinedStyled
          style={{ fontSize: '30px', color: 'lightgray' }}
        />
        <UserOutlined style={{ fontSize: '30px', color: 'lightgray' }} />
      </S.Nav>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  margin-top: 160px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
