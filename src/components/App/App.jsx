import React from 'react';
import './resets.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import GameStartPage from '../../pages/GameStartPage/GameStartPage';
import GameEndPage from '../../pages/GameEndPage/GameEndPage';
import GameMainPage from '../../pages/GameMainPage/GameMainPage';

function App() {
  return (
    <BrowserRouter>

      <Route path="/" exact>
        <GameStartPage />
      </Route>
      <Route path="/end">
        <GameEndPage />
      </Route>
      <Route>
        <GameMainPage path="/main" />
      </Route>
    </BrowserRouter>
  );
}

export default App;
