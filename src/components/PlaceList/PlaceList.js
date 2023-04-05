import React, { useState, useRef, useEffect } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import debounce from 'lodash.debounce';
import styled from 'styled-components';
import * as S from './PlaceListStyle';

const { Search } = Input;
const onSearch = value => console.log(value);

const App = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const observer = useRef();
  const lastItemRef = useRef();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch('/data/placeListData.json');
    const data = await res.json();
    setItems(prevItems => [...prevItems, ...data]);
    setPage(prevPage => prevPage + 1);
    setLoading(false);
  };

  // MARK: debounce 적용
  // -> 모든 스크롤이벤트를 추적하지 않고, 마지막에 닿았을 때만 추적하여 0.5초 후 리렌더링
  const delayedFetchData = useRef(debounce(fetchData, 500)).current;

  useEffect(() => {
    // MARK: loading이 true일 경우 함수 실행 중단 (이미 데이터를 가져오는 중이기 때문)
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) delayedFetchData();
    });
    if (lastItemRef.current) observer.current.observe(lastItemRef.current);
  }, [loading, delayedFetchData]);

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
          {items.map((item, index) => (
            <S.ListWrapper key={index}>
              <S.ListImg src={item.src} alt="toiletImage" />
              {item.title}
            </S.ListWrapper>
          ))}
          {/* MARK: lastItemRef 객체로 마지막 요소 관찰 */}
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
