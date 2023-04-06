import {
  CloseOutlined,
  DeleteOutlined,
  PlusSquareOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import variables from '../../styles/variables';

export const Title = styled.h1`
  margin-top: ${props => (props.title ? '76px' : '69px')};
  margin-left: ${props => (props.title ? '45px' : '98px')};
  font-weight: 700;
  font-size: 26px;
  width: 100%;
  display: block;
  text-align: left;
`;
export const Wrapperr = styled.img`
  width: 37px;
  height: 34px;
  margin-left: 50px;
  margin-top: 22px;
`;

export const Storage = styled.p`
  display: inline;
  position: absolute;
  position: absolute;
  top: 28px;
  left: 89px;
  font-size: 18px;
  font-weight: 400;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

export const PlaceDateContainer = styled.div`
  margin-left: 28px;
  margin-top: 10px;
`;

export const Place = styled.p`
  margin-bottom: 11px;
  font-weight: 700;
  font-size: 23 px;
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
  margin-left: ${props => (props.margin ? '20px' : '10px')};
  margin-top: -2px;
  color: #bbbbbb;
  font-size: 17px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const TitleWishListStorage = styled.p`
  margin-left: 19px;
  margin-top: 20px;
  padding-left: 6px;
`;

export const StyledCloseOutlined = styled(CloseOutlined)`
  position: fixed;
  top: 130px;
  right: 50px;
  font-size: 23px;
`;

export const WishlistWrapper = styled.div`
  margin-top: ${props => (props.margin ? '46px' : '60px')};
  margin-left: ${props => (props.margin ? '25px' : '31px')};
  width: ${props => (props.margin ? '88%' : '85%')};
  overflow: scroll;
  height: ${props => (props.margin ? '66%' : '87%')};
  display: block;
`;

export const WishlistContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  margin-left: 21px;
  /* background-color: ${props => (props.color ? 'red' : 'blue')}; */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: inherit;
`;

export const Nav = styled.div`
  ${variables.flex('row', 'space-around', 'center')}
  ${variables.position('absolute', 'null', 'null', '0', '0')};
  ${variables.widthHeight('100%', 'null')};
  height: 80px;
  background-color: white;
  border-top: 1px solid lightgray;
`;

export const HeartOutlinedStyled = styled(HeartOutlined)`
  margin: 0 -80px;
`;
