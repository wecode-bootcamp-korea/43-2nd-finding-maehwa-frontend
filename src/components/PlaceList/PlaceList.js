import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { PLACE_LIST } from './Placelistdata';
import * as S from './PlaceListStyle';

const { Search } = Input;
const onSearch = value => console.log(value);

const PlaceList = () => {
  return (
    <React.Fragment>
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
          {PLACE_LIST.map(({ id, src, title }) => (
            <S.ListWrapper key={id}>
              <S.ListImg src={src} alt="toiletImage" />
              {title}
            </S.ListWrapper>
          ))}
        </S.ListBox>
      </S.ListContainer>

      <S.Nav>
        <SearchOutlined style={{ fontSize: '30px', color: '#9CD5C2' }} />
        <S.HeartOutlinedStyled
          style={{ fontSize: '30px', color: 'lightgray' }}
        />
        <UserOutlined style={{ fontSize: '30px', color: 'lightgray' }} />
      </S.Nav>
    </React.Fragment>
  );
};

export default PlaceList;
