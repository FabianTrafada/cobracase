// components/RandomNumber.tsx
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
`;

const NumberContainer = styled.div`
  overflow: hidden;
  height: 1.5em;
  display: inline-block;
  vertical-align: middle;
`;

const NumberSlot = styled.div<{ delay: number }>`
  display: inline-block;
  animation: ${spin} 1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  animation-delay: ${({ delay }) => delay}s;
  position: relative;
  top: 100%;
`;

const RandomNumber: React.FC = () => {
  const [randomNumber, setRandomNumber] = useState<number[]>([]);

  useEffect(() => {
    const generateRandomNumber = () => {
        const number = Math.floor(Math.random() * 9000 + 1000)
          .toLocaleString('en-US', { minimumIntegerDigits: 4, useGrouping: false })
          .split('')
          .map(Number);
        return number;
      };
      
    setRandomNumber(generateRandomNumber());
  }, []);

  return (
    <>
        {randomNumber.map((num, index) => (
          <NumberContainer key={index}>
            <NumberSlot delay={index * 0.1}>
              {[...Array(10).keys()].map(n => (
                <div key={n}>{n}</div>
              ))}
              <div>{num}</div>
            </NumberSlot>
          </NumberContainer>
        ))}
    </>
  );
};

export default RandomNumber;
