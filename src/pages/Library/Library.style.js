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

export const Title = styled.h1`
  position: absolute;
  top: 45px;
  left: 28px;
  font-weight: 700;
  font-size: 22px;
`;

export const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

export const PlaceDateContainer = styled.div`
  margin-left: 21px;
  margin-top: 10px;
`;

export const Place = styled.p`
  margin-bottom: 11px;
  font-weight: 700;
  font-size: 16px;
  color: #333333;
`;

export const Date = styled.p`
  color: #dbdbdb;
  font-size: 14px;
`;

export const WishlistContainer = styled.div`
  display: flex;
  margin-bottom: 27px;
  margin-left: 14px;
`;

export const WishlistWrapper = styled.div`
  margin-top: 127px;
  margin-left: 37px;
  width: 92%;
  overflow: scroll;
`;
