import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

import StartPage from './StartPage';
import Game from './Game';

import {Container} from "react-bootstrap"

class App extends React.Component { 
  
  state = {diff: ''};


  getDiff = (d) => {
    this.setState({diff: d});
  }
  
  render(){
    return (
      <BrowserRouter>
        <Container style = {{ marginTop: "90px"}}>
            <Route path="/" exact render={(props) => <StartPage handleDiff = {this.getDiff} />} />
            <Route path="/game" render={(props) => <Game diff = {this.state.diff}/>} />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
//<Route path="/result" component={ResultsPage} />