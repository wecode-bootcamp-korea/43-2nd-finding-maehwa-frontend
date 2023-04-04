import React from 'react';
import * as S from './ModalLayout.style';

const RealModal = ({ children }) => {
  return <S.ListContainer>{children}</S.ListContainer>;
};

export default RealModal;
