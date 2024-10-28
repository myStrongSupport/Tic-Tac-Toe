import Player from "./components/Player";

function App() {
  return (
    <main>
      {/* as wrapper */}
      <div id="game-container">
        {/* players */}
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        {/* Game Boared */}
      </div>
    </main>
  );
}

export default App;
