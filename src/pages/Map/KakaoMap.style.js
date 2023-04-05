import { Space, Button } from 'antd';
import styled from 'styled-components';
import Icon, { SendOutlined, CloseOutlined } from '@ant-design/icons';
import variables from '../../styles/variables';

// ---------- SearchBar ----------

export const Form = styled.form``;

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

export const SearchList = styled.div`
  z-index: 1;
  background-color: red;
  width: 100%;
  height: 100vh;
`;

// ---------- FilterButton ----------

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

// ---------- Map ----------

export const MapContainer = styled.div`
  ${variables.widthHeight('100%', '100%')}
  border: 1px solid lightgray;
`;

export const MapBox = styled.div`
  ${variables.widthHeight('100%', '100%')}
  filter: contrast(70%) brightness(120%);
`;

export const Map = styled.div`
  position: relative;
  ${variables.widthHeight('100%', '100%')};
  filter: contrast(70%) brightness(120%);
  background-color: #06f;
`;

export const InfoContainer = styled.div`
  ${variables.widthHeight('100%', '110px')}
  background-color: #fff;
  box-shadow: 0px 4px 18px 7px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  ${variables.position('absolute', '595px', '0', '0', '12px')}
  /* position: absolute;
  bottom: 0;
  left: 0;
  right: 0; */
  z-index: 9999;
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  width: 110px;
  height: 110px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

// ---------- NavigationButton ----------

export const NavigationButton = styled.button`
  position: absolute;
  width: 45px;
  height: 45px;
  left: 332px;
  top: 660px;
  background: #ffffff;
  box-shadow: 0px 4px 18px 7px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 10px;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`;

// ---------- ListTap ----------

export const ListContainer = styled.div`
  ${variables.widthHeight('100%', '15%')}
  position: absolute;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  background-color: white;
  box-shadow: 0px 4px 18px 7px rgba(0, 0, 0, 0.1);
  z-index: 1;
  // FIXME : PlaceCard 테스트용
  opacity: 0;
`;

export const ListThumbnailText = styled.h2`
  ${variables.flex('row', 'center', 'center')}
  height: 100%;
  font-size: 14px;
`;

// ---------- PlaceCard ----------

export const PlaceCard = styled.div`
  ${variables.widthHeight('365px', '110px')}
  ${variables.position('absolute', '595px', '0', '0', '12px')}
  display: flex;
  background: #ffffff;
  box-shadow: 0px 4px 18px 7px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const PlaceCardImg = styled.img`
  ${variables.widthHeight('110px', '110px')}
  border-radius: 10px 0px 0px 10px;
  background: #d9d9d9;
`;

export const PlaceInfo = styled.div`
  ${variables.flex('column', 'null', 'null')}
  width: 220px;
  padding: 18px 0 18px 18px;
`;

export const PlaceInfoTitle = styled.div`
  ${variables.flex('row', 'null', 'center')}
  gap: 4px;
`;

export const PlaceCardTitle = styled.h4`
  ${variables.fontStyle('16px', '600')};
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
  ${variables.preventDrag}
  line-height: 19px;
  color: #ff5959;
`;

export const PlaceSeperateLine = styled.div`
  ${variables.fontStyle('11px', '700')};
  ${variables.preventDrag}
  color: #d9d9d9;
`;

export const PlaceReviewNum = styled.div`
  ${variables.fontStyle('12px', '500')}
  ${variables.preventDrag}
  color: #a8a8a8;
`;

export const PlaceRate = styled.div`
  ${variables.fontStyle('13px', '500')}
  ${variables.preventDrag}
  display: flex;
  margin-top: 5px;
  gap: 2px;
`;

// ---------- SVG Icons ----------

// HeartIcon
export const HeartSvg = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="heart"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"
      fill="#9CD5C2"
    />
    <path
      d="M679.7 201c-73.1 0-136.5 40.8-167.7 100.4C480.8 241.8 417.4 201 344.3 201c-104 0-188.3 82.6-188.3 184.5 0 201.2 356 429.3 356 429.3s356-228.1 356-429.3C868 283.6 783.7 201 679.7 201z"
      fill="#FFFFFF"
    />
  </svg>
);

export const FilledHeartSvg = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="heart"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"
      fill="#FFFFFF"
    />
    <path
      d="M679.7 201c-73.1 0-136.5 40.8-167.7 100.4C480.8 241.8 417.4 201 344.3 201c-104 0-188.3 82.6-188.3 184.5 0 201.2 356 429.3 356 429.3s356-228.1 356-429.3C868 283.6 783.7 201 679.7 201z"
      fill="#9CD5C2"
    />
  </svg>
);

const HeartIcon = props => <Icon component={HeartSvg} {...props} />;
const FilledHeartIcon = props => <Icon component={FilledHeartSvg} {...props} />;

export const StyledHeartTwoTone = styled(HeartIcon)`
  ${variables.position('absolute', '-3px', 'null', 'null', '70px')};
  margin: 18px;
  font-size: 16px;
  cursor: pointer;
`;

export const StyledHeartOutlined = styled(FilledHeartIcon)`
  ${variables.position('absolute', '-3px', 'null', 'null', '70px')};
  margin: 18px;
  font-size: 16px;
  color: '#9CD5C2';
  cursor: pointer;
`;

// SendOutlined
export const SendSvg = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="send"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z" />
  </svg>
);

const SendIcon = props => <Icon component={SendOutlined} {...props} />;

export const StyledSendIcon = styled(SendIcon)`
  ${variables.position('absolute', '5%', 0, 0, '50%')}
  font-size: 22px;
  transform: rotate(-55.42deg);
  z-index: 2;
  color: #9cd5c2;

  &:hover {
    cursor: pointer;
  }
`;

// CloseOutlined
export const CloseSvg = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="close"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
  </svg>
);

const CloseIcon = props => <Icon component={CloseOutlined} {...props} />;

export const StyledCloseIcon = styled(CloseIcon)`
  ${variables.position('absolute', '-3px', '-5px', 'null', 'null')};
  margin: 18px;
  font-size: 14px;
  color: lightgray;

  &:hover {
    cursor: pointer;
  }
`;
