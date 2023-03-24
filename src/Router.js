import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import KakaoLogin from './pages/KakaoLogin/KakaoLogin';
import Wishlist from './pages/Wishlist/Wishlist';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kakao-login" element={<KakaoLogin />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
