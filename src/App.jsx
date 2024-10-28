import Player from "./components/Player";

function App() {
  return (
    <main>
      {/* as wrapper */}
      <div id="game-container">
        {/* players */}
        <ol id="players">
          <Player intialName="Player 1" symbol="X" />
          <Player intialName="Player 2" symbol="O" />
        </ol>
        {/* Game Boared */}
      </div>
    </main>
  );
}

export default App;
