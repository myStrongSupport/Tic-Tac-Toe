import { useState } from "react";

const Player = ({ intialName, symbol }) => {
  const [playerName, setPlayerName] = useState(intialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className="name-player">
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
