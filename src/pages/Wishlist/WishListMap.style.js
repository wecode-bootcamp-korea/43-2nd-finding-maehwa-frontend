import styled from 'styled-components';

export const Nav = styled.nav`
  position: absolute;
  left: 0px;
  top: 763px;
  width: 390px;
  height: 81px;
  border-top: 1px solid #d9d9d9;
  background: #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: inherit;
`;

export const LeftArrowWrapper = styled.div`
  margin-top: 22px;
  margin-right: 326px;
`;

export const RepresentativeTitle = styled.p`
  margin-top: 37px;
  margin-left: -202px;
  font-size: 29px;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  margin-right: -17px;
  margin-top: 14px;
  color: #808080;
  font-size: 18px;
  padding-top: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MapWrapper = styled.div`
  height: 62vh;
  overflow: scroll;
`;

export const DetailReviewPlaceContain = styled.div`
  margin-left: 12px;
`;

export const ImgHeartWrapper = styled.div`
  position: relative;
`;

export const Img = styled.img`
  width: 324px;
  height: 330px;
  margin-top: 35px;
  border-radius: 23px;
`;
export const Place = styled.p`
  margin-top: 22px;
  font-weight: 600;
  font-size: 18px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 16px;
  padding-top: 3px;
`;

export const Rating = styled.p`
  font-size: 20px;
  font-size: 21px;
`;

export const Review = styled.p`
  margin-left: 17px;
  color: #a8a8a8;
  font-size: 20px;
`;
