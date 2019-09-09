import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import StartPage from './StartPage';
import Game from './Game';

const App = () => {
  return (
    <BrowserRouter>
    <div>
        <Route path="/" exact component={StartPage} />
        <Route path="/game" exact component={Game} />
    </div>
    </BrowserRouter>
  );
}

export default App;
//<Route path="/result" component={ResultsPage} />