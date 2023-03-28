import styled from 'styled-components';
import { Space, Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

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
  display: flex;
  justify-content: center;
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

export const ListContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 95px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ListTitle = styled.div`
  position: absolute;
  top: 125px;
  left: 32px;
  font-size: 20px;
  font-weight: 700;
`;

export const ListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 150px);
  gap: 30px;
`;

export const ListWrapper = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const ListImg = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 5px;
  border-radius: 20px;
  object-fit: cover;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: white;
  border-top: 1px solid lightgray;
`;

export const HeartOutlinedStyled = styled(HeartOutlined)`
  margin: 0 -80px;
`;
