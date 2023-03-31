import styled from 'styled-components';
import { Rate } from 'antd';

export const ViewReviewWrap = styled.div`
  width: 340px;
  height: 100%;
  border-radius: 10px;
  background-color: white;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ViewReviewDate = styled.div`
  font-size: 11px;
  color: gray;
  margin-left: 290px;
  padding-top: 7px;
`;

export const ViewReviewName = styled.div`
  font-weight: 700;
  margin-left: 20px;
`;

export const UserInfo = styled.div`
  width: 335px;
  display: flex;
  justify-content: space-between;
`;

export const ViewReviewAssess = styled.div`
  margin: 8px 0 0 20px;
`;

export const RateStyled = styled(Rate)`
  color: #9cd5c2;
  font-size: 15px;
`;

export const ModifyInfo = styled.div`
  display: flex;
  margin-right: 10px;
`;
export const ModifyReview = styled.img`
  width: 13px;
  height: 13px;
  color: #ccc;
`;
export const DeleteReview = styled.img`
  width: 13px;
  height: 13px;
  color: #ccc;
  margin-left: 8px;
  :hover {
    cursor: pointer;
  }
`;

export const SelectedTagContainer = styled.div`
  display: flex;
  margin-left: 20px;
  width: 300px;
  padding: 10px 0;
  gap: 5px;
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ReviewSelectedTag = styled.div`
  border: 1px solid #9cd5c2;
  border-radius: 20px;
  color: #9cd5c2;
  padding: 8px 9px;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

export const ViewReviewMent = styled.div`
  font-size: 14px;
  margin: 5px 15px 0 20px;
`;
