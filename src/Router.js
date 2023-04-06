import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KakaoLogin from './pages/KakaoLogin/KakaoLogin';
import KakaoLoginAuth from './pages/KakaoLogin/KakaoLoginAuth';
import Map from './pages/Map/KakaoMap';
import Review from './pages/Review/Review';
import WriteReview from './pages/Review/WriteReview';
import Library from './pages/Library/Library';
import Wishlist from './pages/Wishlist/Wishlist';
import PlaceList from './components/PlaceList/PlaceList';
import Counter from './pages/Counter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kakao-login" element={<KakaoLogin />} />
        <Route path="/oauth/kakao" element={<KakaoLoginAuth />} />
        <Route path="/map" element={<Map />} />
        <Route path="/review" element={<Review />} />
        <Route path="/write-review" element={<WriteReview />} />
        <Route path="/library" element={<Library />} />
        <Route path="/wishlist/:id" element={<Wishlist />} />
        <Route path="/placelist" element={<PlaceList />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<div>해당 주소는 없는 페이지입니다.</div>} />
        {/* MARK: 아래 Counter 컴포넌트 및 /counter 라우터는 Recoil 예제입니다. */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
