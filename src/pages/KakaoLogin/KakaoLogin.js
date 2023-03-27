import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './KakaoLogin.style';
import { CLIENT_ID, REDIRECT_URI } from '../../config.js';

const KakaoLogin = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <S.LoginContainer>
      <S.SplashImg src="/images/splashImg.png" alt="splashImg" />
      <Link to={KAKAO_AUTH_URL}>
        <S.KakaoLoginBtn
          src="/images/kakao_login_medium_wide.png"
          alt="kakaoLoginBtn"
        />
      </Link>
      <Link to="/map">
        <S.LookAroundBtn>로그인 없이 둘러보기</S.LookAroundBtn>
      </Link>
    </S.LoginContainer>
  );
};

export default KakaoLogin;
