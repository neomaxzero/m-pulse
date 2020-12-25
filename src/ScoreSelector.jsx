import React, { useEffect } from "react";
import scores from "./utils/scores";

const ScoreSelector = ({ saveScore }) => {
  useEffect(() => {
    const onKeyUp = ({ key }) => {
      if (scores.includes(parseInt(key, 10))) {
        saveScore(key);
      }
    };

    document.addEventListener("keyup", onKeyUp);
    return () => document.removeEventListener("keyup", onKeyUp);
  }, []);

  return scores.map((score) => (
    <button key={score} onClick={() => saveScore(score)}>
      {score}
    </button>
  ));
};

export default ScoreSelector;
