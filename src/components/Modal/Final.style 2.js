import styled from 'styled-components';

export const MainWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin: 300px auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 500;
`;

export const Input = styled.input`
  display: block;
  margin: 30px 0;
  width: 100%;
  height: 50px;
`;

export const TitleName = styled.p`
  margin: 50px;
  font-weight: 600;
  font-size: 25px;
`;

export const SendButton = styled.button`
  width: 100%;
  height: 50px;
  opacity: 0.5;
  outline: none;
  border-radius: 5px;
  color: white;

  border: none;
  color: white;

  background-color: #9cd5c2;

  &:disabled {
    background-color: #daf2ea;
  }
`;
