import styled, { keyframes } from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #252525;
`;

export const SplashImg = styled.img`
  width: 100%;
  padding: 100px 30px 0 30px;
`;

export const KakaoLoginBtn = styled.img`
  width: 100%;
  padding: 0 50px;
`;

export const LookAroundBtn = styled.div`
  padding: 20px;
  font-size: 12px;
  color: white;
  text-align: center;
`;

export const rotation = keyframes`
  from { transform: rotate(0deg) };
  to { transform: rotate(360deg) };
`;

export const Spinner = styled.div`
  position: absolute;
  top: 45%;
  left: 45%;
  transform: translate(-50%, -50%);
  height: 50px;
  width: 50px;
  border: 3px solid #9cd5c2;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  animation: ${rotation} 1s linear infinite;
`;
