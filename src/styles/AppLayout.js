import React from 'react';
import styled from 'styled-components';

const AppLayout = ({ children }) => {
  return <Box>{children}</Box>;
};

export default AppLayout;

const Box = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  height: 844px;
  background: white;
  box-shadow: 0 0 2rem 0.1rem rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 430px) {
    width: 100%;
    height: 100%;
  }
`;
