import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import StartPage from './StartPage';
import Game from './Game';

import {Container} from "react-bootstrap"

const App = () => { 
  return (
    <BrowserRouter>
      <Container style = {{ marginTop: "90px"}}>
          <Route path="/" exact component={StartPage} />
          <Route path="/game" exact component={Game} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
//<Route path="/result" component={ResultsPage} />