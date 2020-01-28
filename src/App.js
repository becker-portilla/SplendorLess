import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/game/board/board';

function App() {
  return (
    <Board PlayersQty={4}></Board>
  );
}

export default App;
