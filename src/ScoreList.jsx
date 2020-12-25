import React from "react";

const ScoreList = ({ items, deleteScore }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          Date: {new Date(item.date).toLocaleDateString()} - Score: {item.score}
          <button onClick={() => deleteScore(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default ScoreList;
