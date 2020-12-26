import React, { useState } from "react";

import useLocalStorage from "./hooks/useLocalStorage";
import Layout from "./Layout";
import ScoreList from "./ScoreList";
import ScoreSelector from "./ScoreSelector";
import getId from "./utils/id";

const App = () => {
  const [scoreData, setScoreData] = useLocalStorage("score", []);

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
