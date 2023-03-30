import styled from 'styled-components';
import variables from '../../styles/variables';

export const ImgModal = styled.div`
  width: 300px;
`;

export const ListContainer = styled.div`
  ${variables.widthHeight('90%', '40%')}
  border-radius: 20px;
  background-color: transparent;
  display: flex;
  background-color: white;
  justify-content: center;
  z-index: 1;
  position: fixed;
  overflow: hidden;
`;

export const ToiletModal = styled.img`
  min-width: 340px;
  height: 340px;
  border-radius: 10px;
  margin: 10px 0;

  :hover {
    cursor: pointer;
  }
`;

export const ModalLeft = styled.button`
  height: 8%;
  font-size: 20px;
  text-align: center;
`;
export const ModalRight = styled.button`
  height: 8%;
  font-size: 20px;
`;
