import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/game/board/board';

function App() {
  sessionStorage.clear();
  return (
    <Board PlayersQty={6}></Board>
  );
}

export default App;
