import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import KakaoLogin from './pages/KakaoLogin/KakaoLogin';
import Map from './pages/Map/Map';

import Review from './pages/Review/Review';
import Library from './pages/Library/Library';
import Wishlist from './pages/Wishlist/Wishlist';

import Counter from './pages/Counter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kakao-login" element={<KakaoLogin />} />
        <Route path="/map" element={<Map />} />
        <Route path="/review" element={<Review />} />
        <Route path="/library" element={<Library />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<div>해당 주소는 없는 페이지입니다.</div>} />
        {/* MARK: 아래 Counter 컴포넌트 및 /counter 라우터는 Recoil 예제입니다. */}
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
