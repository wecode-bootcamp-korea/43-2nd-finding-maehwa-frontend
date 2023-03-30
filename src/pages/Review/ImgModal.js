import React, { useState, useRef, useEffect } from 'react';
import * as S from './ImgModalStyle';

const ImgModal = ({ setIsOpen }) => {
  const [curSlide, setCurSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    slideRef.current.style.transform = `translateX(${-300 * curSlide}px)`;
  }, [curSlide]);

  const movePrev = () => {
    setCurSlide(curSlide => curSlide - 1);
  };

  const moveNext = () => {
    setCurSlide(curSlide => curSlide + 1);
  };

  return (
    <S.ImgModal>
      <S.ListContainer>
        {/* <S.ModalLeft onClick={movePrev}>{'<'}</S.ModalLeft> */}
        <S.ToiletModal
          src="/images/toilet6.png"
          alt="toiletImg2"
          onClick={() => setIsOpen(false)}
          ref={slideRef}
        />
        {/* <S.ModalRight onClick={moveNext}>{'>'}</S.ModalRight> */}
      </S.ListContainer>
    </S.ImgModal>
  );
};

export default ImgModal;
