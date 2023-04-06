import styled from 'styled-components';
import variables from '../../styles/variables';

export const ListContainer = styled.div`
  ${variables.widthHeight('95%', '80%')}
  /* margin: 60px auto; */
  margin-top: -65px;
  margin-left: -21px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 4px 18px 7px rgba(0, 0, 0, 0.1);
  z-index: 1;
  position: fixed;
  height: 80%;
`;
