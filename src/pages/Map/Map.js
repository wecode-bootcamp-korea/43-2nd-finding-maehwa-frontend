import React, { useEffect, useState, useRef } from 'react';
import { Input, Button } from 'antd';
import * as S from './Map.style';

const Map = () => {
  const [productData, setProductData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { Search } = Input;
  const { kakao } = window;
  const listContainer = useRef(null);
  const placeCard = useRef(null);

  const onSearch = value => console.log(value);

  useEffect(() => {
    fetch('/data/placeInfoData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  }, []);

  useEffect(() => {
    // MARK: 지도 그리기
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.505449, 127.05186),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    if (productData.length > 0) {
      // MARK: 특정 위치에 핀 찍기
      let markerPosition = new kakao.maps.LatLng(
        productData[0].lat,
        productData[0].lng
      );
      let marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);

      // MARK: 마커 클릭시 placeCard 토글
      kakao.maps.event.addListener(marker, 'click', function () {
        setIsOpen(!isOpen);
        isOpen
          ? (placeCard.current.style = 'opacity: 0')
          : (placeCard.current.style = 'opacity: 100');
      });
    } else if (productData === undefined) {
      alert('there is no data');
    }
  }, [productData, isOpen]);

  const dragListContainer = () => {
    listContainer.current.style = 'height: 100%;';
    listContainer.current.style.transition = 'all 0.3s ease-in-out';
  };

  return (
    <>
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

      <S.MapContainer>
        <S.MapBox id="map" />
      </S.MapContainer>

      <S.ListContainer onClick={dragListContainer} ref={listContainer}>
        <S.ListThumbnailText>
          당신을 기다리는 쾌적한 장소 20개
        </S.ListThumbnailText>
      </S.ListContainer>

      <S.PlaceCard ref={placeCard}>
        <S.PlaceCardImg
          src="https://images.pexels.com/photos/6580383/pexels-photo-6580383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="placeCardImg"
        />
        <S.PlaceInfo>
          <S.PlaceInfoTitle>
            <S.PlaceCardTitle>현대백화점 무역센터점</S.PlaceCardTitle>
            <S.PlaceCardSubTitle>백화점</S.PlaceCardSubTitle>
          </S.PlaceInfoTitle>
          <S.PlaceLocation>서울특별시 강남구 테헤란로 317</S.PlaceLocation>
          <S.PlaceInfoContent>
            <S.PlaceDistance>590m</S.PlaceDistance>
            <S.PlaceSeperateLine>|</S.PlaceSeperateLine>
            <S.PlaceReviewNum>리뷰 3개</S.PlaceReviewNum>
          </S.PlaceInfoContent>
          <S.PlaceRate>★ 4.93</S.PlaceRate>
        </S.PlaceInfo>
        <S.StyledHeartOutlined />
      </S.PlaceCard>
    </>
  );
};

export default Map;
