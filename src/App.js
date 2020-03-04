import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Svc from './common/services';
import './App.css';
import Main from './components/presentation/main/main'
import Board from './components/game/board/board';
import PlayerBoard from './components/game/playerBoard/playerBoard';

function App() {
  sessionStorage.clear();
  Svc.InitFirebase();
  return (
    <Router>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/board" >
            <Board PlayersQty={4}></Board>        
        </Route>
        <Route path="/playerBoard" >
            <PlayerBoard ></PlayerBoard>        
        </Route>
    </Router>
  );
}

export default App;
