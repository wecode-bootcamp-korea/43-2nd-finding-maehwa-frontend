import styled from 'styled-components';
import { LeftOutlined, LikeOutlined } from '@ant-design/icons';
import { Button, Rate } from 'antd';
import variables from '../../styles/variables';

// export const ReviewWrap = styled.div`
//   overflow: scroll;
//   ::-webkit-scrollbar {
//     display: none;
//   }
// `;

export const ReviewBack = styled.div`
  background-color: white;
  height: 63px;
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;
`;

export const LeftOutlinedStyled = styled(LeftOutlined)``;

export const ReviewMap = styled.img`
  position: absolute;
  width: 390px;
  height: 250px;
  object-fit: cover;
  margin-top: 60px;
`;

export const ReviewTitleWrap = styled.div`
  width: 350px;
  height: 180px;
  box-shadow: 0px 4px 18px 7px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: white;
  margin-top: 240px;
  z-index: 1;
`;

export const ReviewTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const TitleAddress = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const AddressExplain = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  color: gray;
`;

export const ReviewAssess = styled.div`
  font-size: 17px;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const ShareAndLike = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 15px;
`;

export const SharePlace = styled.div`
  font-weight: 600;
  &:after {
    content: '┃';
    color: #bababa;
    margin-left: 40px;
  }
  :hover {
    cursor: pointer;
  }
`;

export const LikePlace = styled.div`
  color: #9cd5c2;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
`;

export const SubTitleWrap = styled.div`
  background: #f1f1f1;
  width: 390px;
  height: 500px;
  position: absolute;
  bottom: 0;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ToiletImgList = styled.div`
  margin-left: 25px;
  width: 340px;
`;

export const ToiletImgTitle = styled.div``;

export const ReviewToiletWrap = styled.div`
  display: flex;
  gap: 10px;
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ToiletDetailImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  margin: 10px 0;
  :hover {
    cursor: pointer;
  }
`;

export const ReviewInfoTitle = styled.div`
  margin: 10px 0 0 25px;
`;

export const InfoRequest = styled.div`
  font-size: 11px;
  color: gray;
  text-decoration: underline;
  margin: 85px 0 10px 300px;
  :hover {
    cursor: pointer;
  }
`;

export const InfoContainer = styled.div`
  width: 340px;
  height: 175px;
  border-radius: 10px;
  background-color: white;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const OpenTimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 0 auto;
  padding-top: 20px;
`;

export const OpenTimeTitle = styled.div`
  font-weight: 700;
`;

export const OpenTime = styled.div`
  font-weight: 700;
  color: #9cd5c2;
`;

export const ManageWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 0 auto;
  padding-top: 15px;
`;

export const ManageTitle = styled.div`
  font-weight: 700;
`;

export const ManageName = styled.div``;

export const InfoMoreContainer = styled.div`
  width: 340px;
  height: 200px;
  border-radius: 10px;
  background-color: white;
  margin: 0 auto;
`;

export const MoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  justify-content: center;
`;

//모달바
export const ListContainer = styled.div`
  ${variables.widthHeight('100%', '10%')}
  position: absolute;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  background-color: white;
  box-shadow: 0px 4px 18px 7px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const ListThumbnailTitle = styled.h2`
  ${variables.flex('row', 'center', 'center')}
  /* height: 100%; */
  font-size: 20px;
  font-weight: 700;
  color: #9cd5c2;
  margin-top: 15px;
`;

export const InfoMoreDate = styled.div`
  font-size: 11px;
  color: gray;
  margin: 10px 0 0 220px;
`;
export const ViewReview = styled.div``;

export const ViewReviewNumber = styled.div`
  margin: 10px 0 0 25px;
`;
export const ViewReviewWrap = styled.div`
  width: 340px;
  height: 155px;
  border-radius: 10px;
  background-color: white;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ViewReviewDate = styled.div`
  font-size: 11px;
  color: gray;
  margin-left: 280px;
  padding-top: 7px;
`;
export const UserInfo = styled.div`
  width: 340px;
  display: flex;
  justify-content: space-between;
`;

export const ModifyInfo = styled.div`
  display: flex;
  margin-right: 10px;
`;
export const ModifyReview = styled.div`
  font-size: 13px;
  color: #ccc;
`;
export const DeleteReview = styled.div`
  font-size: 13px;
  color: #ccc;
  margin-left: 5px;
  :hover {
    cursor: pointer;
  }
`;

export const ViewReviewName = styled.div`
  font-weight: 700;
  margin-left: 20px;
`;

export const ViewReviewAssess = styled.div`
  margin: 8px 0 0 20px;
`;

export const ReviewBtnContainer = styled.div`
  display: flex;
  margin-left: 20px;
  width: 100%;
  padding: 10px 0;
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

export const ChosenButton = styled.div`
  border: 1px solid #9cd5c2;
  border-radius: 20px;
  color: #9cd5c2;
  padding: 0 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const ViewReviewMent = styled.div`
  font-size: 14px;
  margin: 5px 0 0 20px;
`;

export const LikeReview = styled.div`
  margin-left: 285px;
  padding-bottom: 8px;
  display: flex;
`;
export const StyledLikeOutlined = styled(LikeOutlined)``;
export const LikeReviewNumber = styled.div`
  font-size: 15px;
  margin-left: 6px;
  margin-top: 3px;
`;

export const ReviewAssessStar = styled.div`
  display: flex;
  justify-content: center;
`;

export const RateStyled = styled(Rate)`
  color: #9cd5c2;
  font-size: 30px;
`;

export const UploadReviewComment = styled.form`
  display: column;
  justify-content: center;
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

  ::-webkit-scrollbar {
    display: none;
  }
  :focus {
    border-color: #ccc;
    outline: none;
  }
`;

export const UploadReview = styled.button`
  width: 50px;
  height: 25px;
  display: flex;
  margin: 0 auto;
  padding: 5px 0 0 13px;
  background-color: #9cd5c2;
  opacity: 0.8;
  border: none;

  :hover {
    cursor: pointer;
  }
`;

export const WriteReviewWrap = styled.div`
  width: 340px;
  border-radius: 10px;
  background-color: white;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Click = styled.div`
  width: 300px;
  height: 10px;
`;
export const ReviewNav = styled.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;

  background-color: white;
  border-top: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// export const Aaa = styled(HeartOutlined)`
//   color: ${({ color }) => color};
// `;

export const StyledTable = styled.div``;

export const StyledTr = styled.tr`
  display: flex;
  border-collapse: separate;
  /* flex-wrap: wrap; */
  font-weight: 400;
  font-size: 13px;
`;

export const StyledTh = styled.div`
  display: flex;
  align-items: center;
  width: 10rem;
  border-bottom: 1px solid;
  border-right: 1px solid;
  /* color: ${({ theme }) => theme.gray}; */
  font-weight: 600;
  padding: 5px;
  /* word-break: keep-all; */
`;

export const StyledTd = styled.div`
  display: flex;
  border-bottom: 1px solid;

  align-items: center;
  padding: 0 10px;
  /* word-break: keep-all; */
`;
