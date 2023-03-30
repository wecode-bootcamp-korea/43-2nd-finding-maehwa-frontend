import { DeleteOutlined } from '@ant-design/icons';
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
  left: 44px;
  font-weight: 700;
  font-size: 22px;
`;

export const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

export const PlaceDateContainer = styled.div`
  margin-left: 28px;
  margin-top: 10px;
`;

export const Place = styled.p`
  margin-bottom: 11px;
  font-weight: 700;
  font-size: 20px;
  color: #333333;
`;

export const DateDeleteWrapper = styled.div`
  display: flex;
`;

export const Date = styled.p`
  color: #dbdbdb;
  font-size: 18px;
`;

export const StyledDeleteOutlined = styled(DeleteOutlined)`
  margin-left: 10px;
  margin-top: -2px;
  color: #bbbbbb;
  font-size: 17px;
`;

export const WishlistContainer = styled.div`
  display: flex;
  margin-bottom: 33px;
  margin-left: 18px;
`;

export const WishlistWrapper = styled.div`
  margin-top: 127px;
  margin-left: 37px;
  width: 92%;
  overflow: scroll;
`;
