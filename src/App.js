import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Svc from './common/services';
import './App.css';
import Board from './components/game/board/board';
import PlayerBoard from './components/game/playerBoard/playerBoard';

function App() {
  sessionStorage.clear();
  Svc.InitFirebase();
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
