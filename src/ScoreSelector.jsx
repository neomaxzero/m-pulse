import React, { useEffect } from 'react';
import scores from './utils/scores';

import styled from '@emotion/styled';
import Section from './components/shared/Section';

const Button = styled.div`
  display: inline-block;
  padding: ${({ theme }) => `${theme.sizes[7]} ${theme.sizes[2]}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.greys[50]};
  border-radius: 15px;
  font-size: ${({ theme }) => theme.sizes[3]};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.sizes[0]};
  margin-right: ${({ theme }) => theme.sizes[0]};
  cursor: pointer;
  min-width: 56px;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryOverText};
  }
`;

const Centerer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ScoreSelector = ({ saveScore }) => {
  useEffect(() => {
    const onKeyUp = ({ key }) => {
      if (scores.includes(parseInt(key, 10))) {
        saveScore(key);
      }
    };

    document.addEventListener('keyup', onKeyUp);
    return () => document.removeEventListener('keyup', onKeyUp);
  }, []);

  return (
    <Section lvl={8}>
      <Centerer>
        {scores.map((score) => (
          <Button key={score} onClick={() => saveScore(score)}>
            {score}
          </Button>
        ))}
      </Centerer>
    </Section>
  );
};

export default ScoreSelector;
