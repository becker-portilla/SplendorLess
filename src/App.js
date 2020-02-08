import React from 'react';
import './App.css';
import Board from './components/game/board/board';

function App() {
  sessionStorage.clear();
  return (
    <Board PlayersQty={4}></Board>
  );
}

export default App;
