import styled from 'styled-components';
import { Space, Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import variables from '../../styles/variables';

export const SearchContainer = styled(Space)`
  ${variables.position('fixed', '20px', 'null', 'null', 'null')};
  background-color: white;

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

export const ListWrapper = styled.div`
  ${variables.fontStyle('16px', '600')};
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
