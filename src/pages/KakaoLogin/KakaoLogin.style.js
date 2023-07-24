import styled, { keyframes } from 'styled-components';
import variables from '../../styles/variables';

export const LoginContainer = styled.div`
  ${variables.absoluteCenter}
  width: 100%;
  height: 100vh;
  background-color: #252525;
`;

export const SplashImg = styled.img`
  ${variables.absoluteCenter}
  width: 70%;
  transform: translate(-50%, -80%);
`;

export const KakaoLoginBtn = styled.img`
  ${variables.absoluteCenter}
  width: 100%;
  padding: 0 50px;
  transform: translate(-50%, 250%);
`;

export const LookAroundBtn = styled.div`
  ${variables.absoluteCenter}
  padding: 20px;
  font-size: 12px;
  color: white;
  text-align: center;
  transform: translate(-50%, 300%);
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
