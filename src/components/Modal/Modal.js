import React from 'react';
import { useLocation } from 'react-router-dom';
import Library from '../../pages/Library/Library';

const Modal = () => {
  const location = useLocation();
  const currentURL = location.pathname;
  const isSelectLogin = currentURL === '/library' && true;

  return <Library data={isSelectLogin ? LOGIN_TEXT : SIGNUP_TEXT} />;
};

export default Modal;

const LOGIN_TEXT = {
  type: '로그인',
};

const SIGNUP_TEXT = {
  type: '회원가입',
};
