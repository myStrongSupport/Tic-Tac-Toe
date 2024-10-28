import React from "react";

const Player = ({ name, symbol }) => {
  return (
    <li className="name-player">
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbole">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
};

export default Player;
