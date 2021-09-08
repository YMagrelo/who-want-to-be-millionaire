import React from 'react';
import './resets.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import GameStartPage from '../../pages/GameStartPage/GameStartPage';
import GameMainPage from '../../pages/GameMainPage/GameMainPage';
import WinGamePage from '../../pages/WinGamePage/WinGamePage';
import GameOverPage from '../../pages/GameOverPage/GameOverPage';

function App() {
  return (
    <BrowserRouter>

      <Route path="/" exact component={GameStartPage} />
      <Route path="/main" component={GameMainPage} />
      <Route path="/gameOver" component={GameOverPage} />
      <Route path="/gameWin" component={WinGamePage} />

    </BrowserRouter>
  );
}

export default App;
