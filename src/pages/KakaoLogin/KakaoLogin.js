import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './KakaoLogin.style';

const KakaoLogin = () => {
  return (
    <S.LoginContainer>
      <S.SplashImg src="/images/splashImg.png" alt="splashImg" />
      <Link to="/map">
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
