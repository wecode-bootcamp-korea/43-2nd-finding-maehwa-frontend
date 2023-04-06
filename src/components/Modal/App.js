import React, { useState } from 'react';
import RealModal from './ModalLayout';
import Library from '../../pages/Library/Library';
import Final from './Final';

const App = ({ setModalOpen, makeList }) => {
  const [isWishListOpen, setIsWishListOpen] = useState(false);

  const style = {
    background: 'rgba(0,0,0,0.8)',
  };

  return (
    <RealModal>
      {isWishListOpen ? (
        <Final />
      ) : (
        <Library
          type="회원가입"
          style={style}
          setModalOpen={setModalOpen}
          setIsWishListOpen={setIsWishListOpen}
          makeList={makeList}
        />
      )}
    </RealModal>
  );
};

export default App;
