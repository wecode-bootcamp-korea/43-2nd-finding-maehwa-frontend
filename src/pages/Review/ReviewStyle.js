import styled from 'styled-components';
import { HeartOutlined, LeftOutlined, LikeOutlined } from '@ant-design/icons';
import { Button, Rate } from 'antd';
import variables from '../../styles/variables';

// export const RateStyled = () => (
//   <svg
//     viewBox="64 64 896 896"
//     focusable="false"
//     data-icon="star"
//     width="2em"
//     height="1em"
//     fill="#9CD5C2"
//     aria-hidden="true"
//   >
//     <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
//   </svg>
// );

// const StarIcon = props => <Icon component={RateStyled} {...props} />;

export const ReviewNav = styled.div`
  background-color: white;
  height: 60px;
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;
`;

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
  margin-top: 85px;
  margin-left: 300px;
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
`;

export const MoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 0 auto;
  padding-top: 5px;
  /* gap 어떻게 쓰나요ㅜㅜ */
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
  margin-bottom: 100px;
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
  height: 80px;

  background-color: white;
  border-top: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeartOutlinedStyled = styled(HeartOutlined)`
  margin: 0 -80px;
`;

export const LeftOutlinedStyled = styled(LeftOutlined)`
  font-size: 25px;
  margin-left: 15px;
  line-height: 75px;
  :hover {
    cursor: pointer;
  }
`;

// export const Aaa = styled(HeartOutlined)`
//   color: ${({ color }) => color};
// `;

export const StyledTable = styled.div`
  /* padding: 5px; */
  background: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;

export const StyledTableRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledTh = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 10rem;
  width: 10rem;
  color: ${({ theme }) => theme.gray};
  background: #c3c7d926;
  font-weight: 600;
  padding: 1rem;
  word-break: keep-all;
`;

export const StyledTd = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  flex: 1;
  word-break: keep-all;
`;
