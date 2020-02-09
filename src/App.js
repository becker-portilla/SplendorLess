import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Board from './components/game/board/board';
import PlayerBoard from './components/game/playerBoard/playerBoard';

function App() {
  sessionStorage.clear();
  return (
    <Router>
      <Switch>
        <Route path="/board">
          <Board PlayersQty={4}></Board>        
        </Route>
        <Route path="/playerBoard">
          <PlayerBoard ></PlayerBoard>        
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
