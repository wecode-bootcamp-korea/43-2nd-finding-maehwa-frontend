// MARK: 아래 Counter 컴포넌트는 Recoil 이해를 돕기 위한 예제입니다.

import React from 'react';
import countState from './Atoms';
import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useResetRecoilState,
} from 'recoil';
import styled from 'styled-components';

const Counter = () => {
  const [counter, setCounter] = useRecoilState(countState);
  // useState와 같지만, useRecoilState을 사용하여 다른 파일에 있는 아톰을 읽을 수 있습니다.
  const currentCount = useRecoilValue(countState); // 읽기 전용!
  const counterHandler = useSetRecoilState(countState); // 값만 변경시키기
  const resetCounter = useResetRecoilState(countState); // 디폴트값으로 값 변경

  const plusCount = () => {
    counterHandler(pre => pre + 1);
  };
  const minusCount = () => {
    counterHandler(pre => pre - 1);
  };

  return (
    <CounterContainer>
      <div>
        <div>{counter}</div>
        <button onClick={plusCount}>+</button>
        <button onClick={minusCount}>-</button>
        <button onClick={resetCounter}>reset</button>
      </div>
    </CounterContainer>
  );
};

export default Counter;

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
