import styled from 'styled-components';
import {
  HeartOutlined,
  HeartFilled,
  LeftOutlined,
  LikeOutlined,
  CopyOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Button, Rate } from 'antd';

import variables from '../../styles/variables';

export const ReviewNav = styled.div`
  background-color: white;
  height: 60px;
  width: 100%;
  /* display: flex;
  position: absolute; */
  top: 0;
`;

export const Scroll = styled.div`
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const LeftOutlinedStyled = styled(LeftOutlined)`
  font-size: 25px;
  margin-left: 15px;
  line-height: 75px;
  :hover {
    cursor: pointer;
  }
`;

export const ReviewMap = styled.img`
  /* position: absolute; */
  width: 390px;
  height: 250px;
  object-fit: cover;
`;

export const ReviewTitleWrap = styled.div`
  position: relative;
  width: 350px;
  height: 180px;
  box-shadow: 0px 4px 18px 7px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: white;
  margin: -70px 0 0 20px;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReviewTitle = styled.div`
  font-size: 22px;
  font-weight: 700;

  margin-top: 25px;
`;

export const ShareAltOutlinedStyled = styled(ShareAltOutlined)`
  margin: 20px 0 0 7px;
  :hover {
    cursor: pointer;
  }
`;

export const CopyAddress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TitleAddress = styled.div`
  font-size: 14px;
`;

export const CopyOutlinedStyled = styled(CopyOutlined)`
  font-size: 14px;
  margin: 0 0 4px 7px;
  :hover {
    cursor: pointer;
  }
`;

export const AddressExplain = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
  margin: 3px 0 15px 0;
  color: #8dc7b4;
`;

// export const ToastContainerStyled = styled(ToastContainer)`
//   text-align: center;
//   color: black;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: fixed;
//   top: 190px;
// `;

export const PlaceTag = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 10px 0;
  gap: 5px;
  margin: 5px 0;
`;

export const ReviewAssess = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
  margin-top: 5px;
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
`;

export const ToiletImgList = styled.div`
  margin: 10px 0 0 25px;
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

export const ModalStyled = styled.div``;

export const ReviewInfoTitle = styled.div`
  margin: 10px 0 0 25px;
`;

export const InfoRequest = styled.div`
  font-size: 11px;
  color: gray;
  text-decoration: underline;
  margin-top: -80px;
  margin-left: 300px;
  padding-top: 85px;
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
  border-radius: 10px;
  background-color: white;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 10px 0;
`;

export const Table = styled.table`
  display: flex;
  width: 300px;
  margin-left: 50px;
`;
export const Thead = styled.thead``;
export const Tr = styled.tr`
  display: flex;
  border-collapse: separate;
  /* flex-wrap: wrap; */
  font-weight: 400;
  font-size: 13px;
  border-bottom: 1px solid #ccc;
  width: 140px;
`;
export const StyledTr = styled.tr`
  display: flex;
  /* flex-wrap: wrap; */
  font-weight: 400;
  font-size: 13px;
  border-bottom: 1px solid #ccc;
  width: 100px;
`;

export const StyledTh = styled.div`
  display: flex;
  align-items: center;
  width: 10rem;
  font-weight: 600;
  padding: 5px;
  word-break: keep-all;
  text-align: left;
  border-right: 1px solid #ccc;
`;

export const StyledTd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  width: 50px;
  /* word-break: keep-all; */
`;
export const StyledTdOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  width: 50px;
  border-right: 1px solid #ccc;
  /* word-break: keep-all; */
`;

//모달바
export const ListContainer = styled.div`
  ${variables.widthHeight('100%', '10%')}
  position: absolute;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  background-color: white;
  box-shadow: 0px 4px 18px 7px rgba(0, 0, 0, 0.1);
  /* z-index: 1; */
`;

export const ListThumbnailTitle = styled.h2`
  ${variables.flex('row', 'center', 'center')}
  height: 100%;
  font-size: 20px;
  font-weight: 700;
  color: #9cd5c2;
`;

export const InfoMoreDate = styled.div`
  font-size: 11px;
  color: gray;
  margin-left: 220px;
`;
export const ViewReview = styled.div``;

export const ViewReviewNumber = styled.div`
  margin: 10px 0 0 25px;
`;

export const ViewReviewWrap = styled.div`
  width: 340px;

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

export const ViewReviewName = styled.div`
  font-weight: 700;
  margin-left: 20px;
`;

export const ViewReviewAssess = styled.div`
  margin: 8px 0 0 20px;
`;

// export const StyledHeartTwoTone = styled(StarIcon)``;

export const ReviewBtnContainer = styled.div`
  display: flex;
  margin-left: 20px;
  width: 100%;
  padding: 5px 0;
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

export const ChosenButtonStyled = styled.div`
  border: 1px solid #9cd5c2;
  color: #9cd5c2;
  border-radius: 20px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const ChosenButton = styled.div`
  border: 1px solid #9cd5c2;
  border-radius: 20px;
  color: white;
  background-color: #9cd5c2;
  padding: 6px 12px;
  display: flex;
  font-size: 14px;
`;

export const MoreButton = styled.div`
  border: 1px solid #9cd5c2;
  border-radius: 20px;
  color: white;
  background-color: #9cd5c2;
  padding: 6px 3px;
  display: flex;
  align-items: center;
  font-size: 14px;
  :hover {
    cursor: pointer;
  }
`;

export const ViewReviewMent = styled.div`
  font-size: 14px;
  margin: 5px 0 0 20px;
`;

export const LikeReview = styled.div`
  margin-left: 285px;
  padding: 8px 0;
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
  padding: 10px 0;
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
  width: 320px;
  height: 100px;
  border: solid 1px lightgray;
  margin-bottom: 10px;
  display: flex;
  margin: 0 auto;
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

export const Nav = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LikeNav = styled.div`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

export const HeartOutlinedStyled = styled(HeartOutlined)`
  color: #9cd5c2;
  font-size: 20px;
`;

export const HeartFilledNav = styled(HeartFilled)`
  color: #9cd5c2;
  font-size: 20px;
`;

export const LikeNavButton = styled.div`
  margin: 3px 0 0 10px;
  color: #9cd5c2;
`;

export const OpenWriteReview = styled.button`
  width: 150px;
  border-radius: 20px;
  height: 35px;
  background-color: #9cd5c2;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

// export const Aaa = styled(HeartOutlined)`
//   color: ${({ color }) => color};
// `;
