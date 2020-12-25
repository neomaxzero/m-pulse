import React, { useState } from "react";
import styled from "styled-components";
import useLocalStorage from "./hooks/useLocalStorage";
import ScoreList from "./ScoreList";
import ScoreSelector from "./ScoreSelector";
import getId from "./utils/id";

const Layout = styled.section`
  padding: 2rem;

  h1 {
    font-size: 1.5rem;
  }
`;

const App = () => {
  const [scoreData, setScoreData] = useLocalStorage("score", []);

  const saveScore = (newScore) => {
    const scoreEntry = { id: getId(), score: newScore, date: Date() };
    setScoreData((oldScore) => [...oldScore, scoreEntry]);
  };

  return (
    <Layout>
      <h1>Pulse</h1>
      <div>
        <ScoreSelector saveScore={saveScore} />
      </div>
      <ScoreList items={scoreData} />
    </Layout>
  );
};

export default App;
