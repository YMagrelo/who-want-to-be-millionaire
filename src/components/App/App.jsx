import React from 'react';
import './resets.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GameStartPage from '../../pages/GameStartPage/GameStartPage';
import GameMainPage from '../../pages/GameMainPage/GameMainPage';

function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/">
          <GameStartPage />
        </Route>
        <Route>
          <GameMainPage path="/main" />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
