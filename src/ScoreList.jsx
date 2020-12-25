import React from "react";

const ScoreList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          Date: {new Date(item.date).toLocaleDateString()} - Score: {item.score}
        </li>
      ))}
    </ul>
  );
};

export default ScoreList;
