import React, { useEffect, useState, useRef } from 'react';
import { Input, Button } from 'antd';
import * as S from './KakaoMap.style';

const { Search } = Input;
const { kakao } = window;

const imageSrc = {
  default:
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcy6IVa%2Fbtr77hOdOp5%2F5CskJcVGjqCG6GcMTgADK1%2Fimg.png',
  active:
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FwZRWv%2Fbtr8iaUbSL7%2F7TTFjcL6918JttrQR6j7PK%2Fimg.png',
};

const KakaoMap = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [map, setMap] = useState();
  const [placeList, setPlaceList] = useState([]);
  const activePlace = placeList.find(place => {
    return place.isActive;
  });
  const mapRef = useRef(null);
  const listContainer = useRef(null);
  const navigationButton = useRef(null);

  const mapOptions = {
    center: activePlace
      ? new kakao.maps.LatLng(activePlace.La, activePlace.Ma)
      : new kakao.maps.LatLng(37.5084912860607, 127.049048815968),
    level: map?.getLevel() ?? 5,
  };

  const onClickMarker = id => {
    const next = placeList.map(placeListData => ({
      ...placeListData,
      isActive: id === placeListData.placeList[0].placeId,
    }));
    setPlaceList([...next]);
  };

  console.log('changed', placeList);

  const initMap = () => {
    if (!mapRef.current) return;
    setMap(new kakao.maps.Map(mapRef.current, mapOptions));
  };

  // 아래 mapOptions를 dependencies array에 넣으면 최적화 때문에 useMemo를 사용해줘야 하기 때문에 lint그대로 둠
  useEffect(initMap, [mapRef, placeList]);

  // MARK: 검색 결과 있을시 PlaceCard 보여주기
  const onSearch = value => {
    console.log(value);
  };

  // MARK: PlaceList 탭 클릭시 위로 올라오는 애니메이션 구현
  const dragListContainer = () => {
    listContainer.current.style.height = '100%';
    listContainer.current.style.transition = 'all 0.3s ease-in-out';
  };

  useEffect(() => {
    const tags = 0;
    const offset = page;
    fetch(
      `http://10.58.52.70:3001/places/visitor?tags=${tags}&offset=${offset}`
    )
      .then(res => res.json())
      .then(data => {
        const newPlaceList = data.data.map(place => ({
          ...place,
          isActive: false,
        }));
        setData([...data.data]);
        setPlaceList([...newPlaceList]);
        console.log(data);
      });
  }, []);

  return (
    <>
      <S.Form>
        <S.SearchContainer direction="vertical">
          <Search
            placeholder="검색어를 입력해주세요."
            onSearch={onSearch}
            // onChange={searchPlace}
            // value={searchText}
            style={{
              width: 330,
            }}
          />
        </S.SearchContainer>
      </S.Form>

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

      <S.Map id="map" ref={mapRef}>
        {placeList.map(place => {
          console.log('place.isActive', place.isActive);
          return (
            <Marker
              key={place.placeList[0].placeId}
              map={map}
              onClick={onClickMarker}
              {...place.placeList[0]}
              placeList={place.placeList}
              isActive={place.isActive}
            />
          );
        })}
        {activePlace?.isActive && <InfoLayer {...activePlace.placeList[0]} />}
      </S.Map>

      <S.ListContainer onClick={dragListContainer} ref={listContainer}>
        <S.ListThumbnailText>
          당신을 기다리는 쾌적한 장소 20개
        </S.ListThumbnailText>
      </S.ListContainer>

      <S.NavigationButton
        ref={navigationButton}
        // onClick={navigateToCurrentPosition}
        top={activePlace?.isActive}
      >
        <S.StyledSendIcon />
      </S.NavigationButton>
    </>
  );
};

// Marker
const Marker = props => {
  const {
    map,
    placeId,
    placeName,
    x,
    y,
    navigationButton,
    isActive,
    placeList,
    onClick,
    ...rest
  } = props;

  const markerImage = new kakao.maps.MarkerImage(
    isActive ? imageSrc.active : imageSrc.default,
    new kakao.maps.Size(24, 35)
  );

  const marker = new kakao.maps.Marker({
    map,
    position: new kakao.maps.LatLng(
      placeList[0].placeLatitude,
      placeList[0].placeLongitude
    ),
    title: placeList[0].placeName,
    image: markerImage,
  });

  kakao.maps.event.addListener(marker, 'click', () => {
    // 추가적으로 핸들링 하고 싶은 함수를 추가
    // 👇 부모로부터 받아온 onClick handler 실행 (없을수도 있으니 optional로 실행)
    onClick?.(placeList[0].placeId);
    console.log('click');
  });

  return null;
};

// InfoLayer
const InfoLayer = props => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const { placeThumbnail, placeCard, placeName, placeAddress } = props;

  // MARK: 찜하기 하트 버튼 토글
  // TODO: 컴포넌트 분리하여 각각의 상태 관리 필요 -> 민경님 코드를 Pull 받아서 해결 가능
  const toggleHeart = () => {
    setIsHeartFilled(prev => !prev);
  };

  // MARK: PlaceCard 닫기
  const closePlaceCard = () => {
    console.log('close!!!!');
  };

  return (
    <S.InfoContainer ref={placeCard}>
      <S.ImageWrapper>
        <img src={placeThumbnail} alt="placeImg" />
      </S.ImageWrapper>

      <S.Info>
        <S.PlaceInfo>
          <S.PlaceCardTitle>{placeName}</S.PlaceCardTitle>
          <S.PlaceLocation>{placeAddress}</S.PlaceLocation>
          <S.PlaceInfoContent>
            <S.PlaceDistance>590m</S.PlaceDistance>
            <S.PlaceSeperateLine>|</S.PlaceSeperateLine>
            <S.PlaceReviewNum>리뷰 3개</S.PlaceReviewNum>
          </S.PlaceInfoContent>
        </S.PlaceInfo>
        <S.StyledCloseIcon onClick={closePlaceCard} />
      </S.Info>

      {isHeartFilled ? (
        <S.StyledHeartOutlined onClick={toggleHeart} />
      ) : (
        <S.StyledHeartTwoTone onClick={toggleHeart} />
      )}
    </S.InfoContainer>
  );
};

export default KakaoMap;
