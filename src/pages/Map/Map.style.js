import { Space, Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import variables from '../../styles/variables';

export const SearchContainer = styled(Space)`
  margin-top: 20px;

  .ant-input:focus {
    border-color: #9cd5c2;
    outline: 0;
  }

  .ant-input:hover {
    border-color: #9cd5c2;
    outline: 0;
  }

  .ant-btn:hover {
    border-color: #9cd5c2;
    color: #9cd5c2;
  }
`;

export const ButtonContainer = styled.div`
  ${variables.flex('row', 'center', 'null')}
  width: 100%;
  padding: 20px 0;
  gap: 5px;

  .ant-btn-default:hover {
    border: 1px solid #9cd5c2;
    color: #9cd5c2;
    cursor: pointer;
  }
`;

export const StyledButton = styled(Button)`
  :hover {
    color: #9cd5c2;
  }
`;

export const MapContainer = styled.div`
  ${variables.widthHeight('100%', '100%')}
  border: 1px solid lightgray;
`;

export const MapBox = styled.div`
  ${variables.widthHeight('100%', '100%')}
  filter: contrast(70%) brightness(120%);
`;

export const ListContainer = styled.div`
  ${variables.widthHeight('100%', '15%')}
  position: absolute;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  background-color: white;
  box-shadow: 0px 4px 18px 7px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const ListThumbnailText = styled.h2`
  ${variables.flex('row', 'center', 'center')}
  height: 100%;
  font-size: 14px;
`;

export const PlaceCard = styled.div`
  ${variables.widthHeight('365px', '110px')}
  ${variables.position('absolute', '595px', '0', '0', '12px')}
  display: flex;
  background: #ffffff;
  box-shadow: 0px 4px 18px 7px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  opacity: 0;
`;

export const PlaceCardImg = styled.img`
  ${variables.widthHeight('110px', '110px')}
  border-radius: 10px 0px 0px 10px;
  background: #d9d9d9;
`;

export const PlaceInfo = styled.div`
  ${variables.flex('column', 'null', 'null')}
  padding: 18px 0 18px 18px;
`;

export const PlaceInfoTitle = styled.div`
  ${variables.flex('row', 'null', 'center')}
  gap: 4px;
`;

export const PlaceCardTitle = styled.h4`
  ${variables.fontStyle('16px', '600')};
`;

export const PlaceCardSubTitle = styled.h6`
  ${variables.fontStyle('13px', '500')};
  color: #6b6b6b;
`;

export const PlaceLocation = styled.div`
  ${variables.fontStyle('13px', '500')};
  margin: 8px 0 6px 0;
  color: #6b6b6b;
`;

export const PlaceInfoContent = styled.div`
  ${variables.flex('row', 'null', 'center')}
  gap: 8px;
`;

export const PlaceDistance = styled.div`
  ${variables.fontStyle('13px', '500')};
  line-height: 19px;
  color: #ff5959;
`;

export const PlaceSeperateLine = styled.div`
  ${variables.fontStyle('11px', '700')};
  color: #d9d9d9;
`;

export const PlaceReviewNum = styled.div`
  ${variables.fontStyle('12px', '500')}
  color: #a8a8a8;
`;

export const PlaceRate = styled.div`
  ${variables.fontStyle('14px', '500')}
  display: flex;
  gap: 2px;
  margin-top: 5px;
`;

export const StyledHeartOutlined = styled(HeartOutlined)`
  margin: 18px;
`;
