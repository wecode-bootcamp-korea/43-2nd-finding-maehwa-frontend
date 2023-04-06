import styled from 'styled-components';
import { Button } from 'antd';
import variables from '../../styles/variables';

export const ListContainer = styled.div`
  ${variables.widthHeight('95%', '80%')}
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: -42px;
  margin-left: -21px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 4px 18px 7px rgba(0, 0, 0, 0.1);
  z-index: 1;
  position: fixed;
  height: 50%;
`;

export const SelectTagList = styled.div`
  position: relative;
  top: 40px;
`;

export const TagListTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
`;

export const ButtonListWrap = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 20px 0;
  gap: 5px;
  flex-wrap: wrap;
  width: 350px;

  .ant-btn-default:hover {
    border: 1px solid #9cd5c2;
    color: #9cd5c2;
    cursor: pointer;
  }
`;

export const TagButton = styled.div``;

export const StyledButton = styled(Button)`
  position: relative;
  :hover {
    color: #9cd5c2;
  }
`;

export const CheckedButton = styled(Button)`
  color: #9cd5c2;
  border-color: #9cd5c2;
`;

export const FinishBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 20px;
`;

export const CancelCheck = styled.div`
  width: 80px;
  height: 30px;
  display: flex;

  border: 1px solid #ccc;
  font-size: 14px;
  background-color: white;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;

export const FinishTagYet = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  background-color: #9cd5c2;
  opacity: 0.6;
  border: none;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;

export const FinishTag = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  background-color: #9cd5c2;
  border: none;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;
