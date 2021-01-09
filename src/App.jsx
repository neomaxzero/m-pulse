import React, { useEffect, useState } from 'react';

import useLocalStorage from './hooks/useLocalStorage';
import Layout from './Layout';
import ScoreList from './ScoreList';
import ScoreSelector from './ScoreSelector';
import getId from './utils/id';
import { API } from 'aws-amplify';

const API_NAME = 'scores';
const API_PATH = '/scores/1';

function getData() {
  return API.get(API_NAME, API_PATH);
}

function putData(data) {
  return API.put(API_NAME, '/scores', {
    body: { id: data[0].id, date: data[0].date, score: 1 },
  });
}

const App = () => {
  useEffect(() => {
    const getScores = async () => {
      try {
        const posts = await getData();

        console.log(
          'Posts retrieved successfully!',
          JSON.stringify(posts, null, 2),
        );
      } catch (error) {
        console.log('Error retrieving posts', error);
      }
    };

    getScores();
  }, []);

  const [scoreData, setScoreData] = useLocalStorage('score', []);

  useEffect(() => {
    putData(scoreData);
  }, [scoreData]);

  const saveScore = (newScore) => {
    const scoreEntry = { id: getId(), score: newScore, date: Date() };
    setScoreData((oldScore) => [...oldScore, scoreEntry]);
  };

  const deleteScore = (scoreId) => {
    setScoreData((scores) => scores.filter((score) => score.id !== scoreId));
  };

  return (
    <Layout>
      <h1>Pulse</h1>
      <div>
        <ScoreSelector saveScore={saveScore} />
      </div>
      <ScoreList items={scoreData} deleteScore={deleteScore} />
    </Layout>
  );
};

export default App;
