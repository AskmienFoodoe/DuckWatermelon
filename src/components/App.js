import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

import StartPage from './StartPage';
import Game from './Game';
import ResultsPage from "./ResultsPage"

import {Container} from "react-bootstrap"

class App extends React.Component { 
  
  state = {diff: '', name: ''};


  getProps = (d, n) => {
    this.setState({diff: d, name: n});
  }
  
  render(){
    return (
      <BrowserRouter>
        <Container style = {{ marginTop: "90px"}}>
            <Route path="/" exact render={(props) => <StartPage handleProps = {this.getProps} />} />
            <Route path="/game" render={(props) => <Game diff = {this.state.diff} name = {this.state.name}/>} />
            <Route path = "/results" component = {ResultsPage} />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
//<Route path="/result" component={ResultsPage} />