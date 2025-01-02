import { useState } from "react";
import "./App.css";

const initialPlayers = [
  { id: 1, name: "silvie" },
  { id: 2, name: "alice" },
  { id: 3, name: "john" },
  { id: 4, name: "tom" },
];

export default function App() {
  const [words, setWords] = useState([]);

  function handleWordInput(word) {
    setWords((words) => [...words, word]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <PlayerList players={initialPlayers} />
        {/* <Button>Add player</Button> */}
        <FormAddPlayer />
      </div>

      <GamePanel words={words} onWordInput={handleWordInput} />
    </div>
  );
}

function PlayerList({ players }) {
  return (
    <ul>
      {players.map((player) => (
        <div key={player.id}>{player.name}</div>
      ))}
    </ul>
  );
}

function GamePanel({ words, onWordInput }) {
  const [word, setWord] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onWordInput(word);
    console.log(words);
    setWord("");
  }

  return (
    <form className="gamepanel" onSubmit={handleSubmit}>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <Button>Submit</Button>
    </form>
  );
}

function FormAddPlayer() {
  return (
    <form className="form-add-player">
      <label>Player name</label>
      <input type="text" />
      <label>Image URL</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}
