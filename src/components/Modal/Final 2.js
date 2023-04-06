import React, { useState } from 'react';
import * as S from './Final.style';
import { Button } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';

const Final = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({ libraryName: '' });

  function getUserInfo(e) {
    setUserInfo({ ...userInfo, libraryName: e.target.value });
  }
  function validateUser(e) {
    console.log(userInfo);
    e.preventDefault();
    fetch('http://10.58.52.70:3001/users/libraries', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(userInfo),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.message) {
          navigate('/library');
        }
      });
  }

  const isUserInfoGot = userInfo.libraryName.length > 1;

  return (
    <S.MainWrapper>
      <S.TitleWrapper>
        <S.TitleName>
          위시리스트 이름 정하기
          <S.Input
            onChange={getUserInfo}
            name="libraryName"
            placeholder="이름"
          />
          <S.SendButton
            onClick={validateUser}
            type="button"
            disabled={!isUserInfoGot}
          >
            만들기
          </S.SendButton>
        </S.TitleName>
      </S.TitleWrapper>
    </S.MainWrapper>
  );
};

export default Final;
