import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './KakaoLogin.style';
import { CLIENT_ID, REDIRECT_URI } from '../../config.js';

const KakaoLoginAuth = () => {
  const navigate = useNavigate();
  const KAKAO_CODE = new URL(window.location.href).search.split('=')[1];

  useEffect(() => {
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(`data.access_token: ${data.access_token}`);
        if (data.access_token) {
          fetch('http://10.58.52.70:3001/users/kakao', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              authorization: data.access_token,
            },
          })
            .then(res => res.json())
            .then(list => {
              console.log(`list.accessToken: ${list.accessToken}`);
              if (list.accessToken) {
                localStorage.setItem('token', list.accessToken);
                navigate('/placelist');
              } else {
                alert('로그인에 실패했습니다.');
                localStorage.removeItem('token', list.accessToken);
                navigate('/');
              }
            });
        } else {
          alert('로그인에 실패했습니다.');
          navigate('/');
        }
      });
  }, []);

  return (
    <div>
      <S.Spinner />
    </div>
  );
};

export default KakaoLoginAuth;
