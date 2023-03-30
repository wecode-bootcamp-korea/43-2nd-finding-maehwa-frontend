import React, { useEffect, useState, useRef } from 'react';
import { Input, Button } from 'antd';
import * as S from './Map.style';
import pinImgGray from '../../assets/pinImgGray.png';
import pinImgGreen from '../../assets/pinImgGreen.png';

const Map = () => {
  // TODO: 전역 state atoms로 migration 필요
  const [productData, setProductData] = useState([]);
  const [selectedData, setSelectedData] = useState([]); // 선택한 마커에 해당하는 데이터
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [selectTitle, setSelectTitle] = useState('');

  const { Search } = Input;
  const { kakao } = window;
  const listContainer = useRef(null);
  const navigationButton = useRef(null);
  const placeCard = useRef();

  const filterCard = [...productData].filter(
    list => list.place_name === selectTitle
  );

  // MARK: 지도 그리기
  const drawMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.503249, 127.05186),
      level: 6,
    };
    const map = new kakao.maps.Map(container, options);

    return map;
  };

  const markerImage = useRef(
    new kakao.maps.MarkerImage(pinImgGray, new kakao.maps.Size(24, 35))
  );
  const clickedMarkerImage = useRef(
    new kakao.maps.MarkerImage(pinImgGreen, new kakao.maps.Size(24, 35))
  );
  const markers = useRef([]);

  useEffect(() => {
    fetch('/data/placeInfoData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data);
        if (data && data.places) {
          setSearchList(
            data.places.filter(places => places.place_name.includes(searchText))
          );
        }
      });
  }, [searchText]);

  useEffect(() => {
    const map = drawMap();

    if (productData.length > 0) {
      // MARK: 여러 개 핀 찍기
      productData.forEach(place => {
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
          title: place.place_name,
          image: markerImage.current,
        });
        markers.current.push(marker);
        // MARK: 마커 클릭시 해당 PlaceCard 보이게 하기
        kakao.maps.event.addListener(marker, 'click', () => {
          if (!selectedData || selectedData !== marker) {
            if (
              !selectedData ||
              selectedData.place_name !== marker.getTitle()
            ) {
              const data = productData.find(
                item => item.place_name === marker.getTitle()
              );
              if (selectedData) {
                setSelectedData(data);
                if (markers.current.length > 1) {
                  markers.current.forEach(el =>
                    el.setImage(markerImage.current)
                  );
                }
                marker.setImage(clickedMarkerImage.current);
                setSelectTitle(marker.getTitle());

                navigationButton.current.style.transform =
                  'translate(0, -120px)';
              }
            }
          }
        });
      });
    } else if (productData === undefined) {
      alert('there is no data');
    }
  }, [productData]);

  // MARK: 찜하기 하트 버튼 토글
  // TODO: 컴포넌트 분리하여 각각의 상태 관리 필요 -> 민경님 코드를 Pull 받아서 해결 가능
  const toggleHeart = () => {
    setIsHeartFilled(prev => !prev);
  };

  // MARK: PlaceCard 닫기
  const closePlaceCard = () => {
    if (placeCard.current !== null) {
      placeCard.current.style.opacity = '0';
    }
    if (navigationButton.current !== null) {
      navigationButton.current.style.transform = 'translate(0, 0)';
    }
    if (markers.current.length > 1) {
      markers.current.forEach(m => m.setImage(markerImage.current));
    }
    setSelectedData([]);
  };

  // MARK: 검색 결과 있을시 PlaceCard 보여주기
  const onSearch = value => {
    if (
      placeCard.current !== null &&
      searchText.includes(productData.place_name)
    ) {
      console.log(value);
      setSearchText(value);
      placeCard.current.style.display = 'block';
    } else if (placeCard.current !== null) {
      placeCard.current.style.display = 'none';
    }
  };

  // MARK: 장소 검색하기
  const searchPlace = e => {
    setSearchText(e.target.value);
    if (
      placeCard.current !== null &&
      searchText.includes(productData.place_name)
    ) {
      console.log(e.target.value);
      placeCard.current.style.display = 'block';
    } else if (placeCard.current !== null) {
      placeCard.current.style.display = 'none';
    }
  };

  // MARK: PlaceList 탭 클릭시 위로 올라오는 애니메이션 구현
  const dragListContainer = () => {
    listContainer.current.style.height = '100%';
    listContainer.current.style.transition = 'all 0.3s ease-in-out';
  };

  // TODO: navigation 버튼 클릭시 현위치로 이동
  const navigateToCurrentPosition = () => {
    // let container = document.getElementById('map');
    // let options = {
    //   center: new kakao.maps.LatLng(37.503249, 127.05186),
    //   level: 6,
    // };
    // let map = new kakao.maps.Map(container, options);
    // setMap(map);
  };

  return (
    <>
      <S.Form>
        <S.SearchContainer direction="vertical">
          <Search
            placeholder="검색어를 입력해주세요."
            onSearch={onSearch}
            onChange={searchPlace}
            value={searchText}
            style={{
              width: 330,
            }}
          />
        </S.SearchContainer>
      </S.Form>

      {searchText.length > 0 && searchList.length > 0 && (
        <S.SearchList>
          {searchList.map(({ id, place_name }) => {
            return <span key={id}>{place_name}</span>;
          })}
        </S.SearchList>
      )}

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

      <S.MapContainer>
        <S.MapBox id="map" />
      </S.MapContainer>

      <S.NavigationButton
        ref={navigationButton}
        onClick={navigateToCurrentPosition}
      >
        <S.StyledSendIcon />
      </S.NavigationButton>

      <S.ListContainer onClick={dragListContainer} ref={listContainer}>
        <S.ListThumbnailText>
          당신을 기다리는 쾌적한 장소 20개
        </S.ListThumbnailText>
      </S.ListContainer>

      {filterCard.length > 0 && (
        <div>
          {filterCard.map(list => {
            return (
              <S.PlaceCard ref={placeCard} key={list.id}>
                <S.PlaceCardImg src={list.url} alt="placeCardImg" />
                <S.PlaceInfo>
                  <S.PlaceInfoTitle>
                    <S.PlaceCardTitle>{list.place_name}</S.PlaceCardTitle>
                  </S.PlaceInfoTitle>
                  <S.PlaceLocation>{list.road_address_name}</S.PlaceLocation>
                  {/* TODO: 클립보드 복사 기능 추가 예정 */}
                  <S.PlaceInfoContent>
                    <S.PlaceDistance>590m</S.PlaceDistance>
                    <S.PlaceSeperateLine>|</S.PlaceSeperateLine>
                    <S.PlaceReviewNum>리뷰 3개</S.PlaceReviewNum>
                  </S.PlaceInfoContent>
                  <S.PlaceRate>★ 4.93</S.PlaceRate>
                </S.PlaceInfo>

                {isHeartFilled ? (
                  <S.StyledHeartOutlined onClick={toggleHeart} />
                ) : (
                  <S.StyledHeartTwoTone onClick={toggleHeart} />
                )}

                <S.StyledCloseIcon onClick={closePlaceCard} />
              </S.PlaceCard>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Map;

// let center = map.getCenter();
// let level = map.getLevel();

// console.log(center);
// console.log(level);
