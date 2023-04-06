import styled from 'styled-components';
import { Space, Button } from 'antd';
import Icon, { HeartOutlined } from '@ant-design/icons';
import variables from '../../styles/variables';

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
      fill="#FFFFFF"
    />
    <path
      d="M679.7 201c-73.1 0-136.5 40.8-167.7 100.4C480.8 241.8 417.4 201 344.3 201c-104 0-188.3 82.6-188.3 184.5 0 201.2 356 429.3 356 429.3s356-228.1 356-429.3C868 283.6 783.7 201 679.7 201z"
      fill="#9CD5C2"
    />
  </svg>
);

const HeartIcon = props => <Icon component={HeartSvg} {...props} />;

export const StyledHeartTwoTone = styled(HeartIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
`;

export const SearchContainer = styled(Space)`
  ${variables.position('fixed', '20px', 'null', 'null', 'null')};
  background-color: white;
  flex-direction: row;
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
  ${variables.position('fixed', '50px', 'null', 'null', 'null')};
  padding: 20px 0;
  gap: 5px;
  display: flex;

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

export const ListContainer = styled.div`
  ${variables.widthHeight('100%', 'null')};
  margin-bottom: 95px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ListTitle = styled.div`
  ${variables.position('absolute', '125px', 'null', 'null', '32px')};
  ${variables.fontStyle('20px', '700')};
`;

export const ListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 150px);
  gap: 22px 30px;
`;

// export const StyledHeartTwoTon = styled(HeartTwoTon)`
//   position: absolute;
//   top: 10px;
// `;

export const ListWrapper = styled.div`
  ${variables.fontStyle('16px', '600')};
  position: relative;
`;

export const ListImg = styled.img`
  ${variables.widthHeight('150px', '150px')}
  margin-bottom: 10px;
  border-radius: 20px;
  object-fit: cover;
`;

export const Nav = styled.div`
  ${variables.flex('row', 'space-around', 'center')}
  ${variables.position('absolute', 'null', 'null', '0', '0')};
  ${variables.widthHeight('100%', 'null')};
  height: 80px;
  background-color: white;
  border-top: 1px solid lightgray;
`;

export const HeartOutlinedStyled = styled(HeartOutlined)`
  margin: 0 -80px;
`;

export const FilterIcon = styled.img`
  width: 29px;
  height: 29px;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 4px;
  margin: 2px 0 0 3px;
  :hover {
    border-color: #9cd5c2;
    color: #9cd5c2;
    cursor: pointer;
  }
  :focus {
    border-color: #9cd5c2;
    outline: 0;
  }
`;
