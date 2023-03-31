import styled from 'styled-components';
import { Rate, Button } from 'antd';

export const WriteReviewWrap = styled.div`
  width: 340px;
  position: absolute;
  top: 15%;
`;

export const SelectedTitle = styled.div``;

export const ReviewTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const TitleAddress = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const SelectTagList = styled.div`
  top: 30px;
`;

export const ButtonListWrap = styled.div`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  /* position: absolute; */
  justify-content: center;
  width: 350px;
  padding: 25px 0 15px 0;
  gap: 5px;
  flex-wrap: wrap;

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

export const ReviewAssessStar = styled.div`
  display: flex;
  justify-content: center;
`;

export const RateStyled = styled(Rate)`
  color: #9cd5c2;
  font-size: 50px;
  margin: 10px 0;
`;

export const UploadReviewComment = styled.form`
  justify-content: center;
  margin-top: 20px;
`;

export const WriteReviewComment = styled.textarea`
  width: 340px;
  height: 100px;
  border: solid 1px lightgray;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  overflow: scroll;
  font-size: 17px;
  ::-webkit-scrollbar {
    display: none;
  }
  :focus {
    border-color: #ccc;
    outline: none;
  }
`;

export const DoUpload = styled.div`
  display: flex;
`;

export const CancelReview = styled.button`
  width: 150px;
  height: 40px;
  display: flex;
  margin: 0 auto;
  border: 1px solid #ccc;
  font-size: 18px;
  background-color: white;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;

export const UploadReview = styled.button`
  width: 150px;
  height: 40px;
  display: flex;
  margin: 0 auto;
  background-color: #9cd5c2;
  opacity: 0.6;
  border: none;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;

export const UploadReviewYet = styled.button`
  width: 150px;
  height: 40px;
  display: flex;
  margin: 0 auto;
  background-color: #9cd5c2;
  border: none;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;
