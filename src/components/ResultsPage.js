import React from "react";
import axios from "axios";
import {Link} from "react-router-dom"

import {Container, Jumbotron, Row, Col, Button} from "react-bootstrap";

import ScoreTable from './ScoreTable';

// Instantiate an axios client
const api = axios.create({
    baseURL: `https://duckwatermelon-backend.herokuapp.com/`
});

class ResultsPage extends React.Component{

    state = {
        scoresEasy: [],
        scoresMedium: [],
        scoresHard: [],
        scoresWumpus: []
    }

    // Get Data
    getHighScores = async () => {
        // Query the backend and wait to get scores. Once this is terminated, 
        // update the state accordingly. 
        const data = await api.get("/scores")
        const highScores = data.data.scores;
        console.log(highScores);

        const sortByScore = (a, b) => {
            if (a.score > b.score) {
                return -1;
            }

            if (a.score === b.score) {
                return 0;
            }

            if (a.score > b.score) {
                return 1;
            }
        }

        const easy = highScores.filter(score => score.diff === 'Easy').sort(sortByScore).slice(0,10);
        const medium = highScores.filter(score => score.diff === 'Medium').sort(sortByScore).slice(0,10);
        const hard = highScores.filter(score => score.diff === 'Hard').sort(sortByScore).slice(0,10);
        const wumpus = highScores.filter(score => score.diff === 'Wumpus').sort(sortByScore).slice(0,10);
        
        this.setState({scoresEasy: easy, scoresMedium: medium, scoresHard: hard, scoresWumpus: wumpus,});
    }

    componentDidMount(){
        this.getHighScores();
    }   

    render(){
        return(
            <Jumbotron>
                <Row className="justify-content-md-center">
                    <h1 style={{marginBottom: "50px"}}>HIGH SCORES</h1>
                </Row>
                <Row>
                   <Col>
                        <h2 style = {{textAlign: 'center'}}>EASY</h2>
                        <ScoreTable scores = {this.state.scoresEasy}/>
                   </Col>
                   <Col>
                        <h2 style = {{textAlign: 'center'}}>MEDIUM</h2>
                        <ScoreTable scores = {this.state.scoresMedium}/>
                   </Col>
                   <Col>
                   <h2 style = {{textAlign: 'center'}}>HARD</h2>
                        <ScoreTable scores = {this.state.scoresHard}/>
                   </Col>
                   <Col>
                        <h2 style = {{textAlign: 'center'}}>WUMPUS</h2>
                        <ScoreTable scores = {this.state.scoresWumpus}/>
                   </Col>
                </Row>
                <Row className="justify-content-md-center" style={{marginTop: "50px"}}>
                    <Link to="/">
                        <Button size = "lg"  style = {{ paddingTop:"15px",  paddingBottom:"15px"}} block>
                                <span style ={{color:"white"}}>Play Again</span>
                        </Button>
                    </Link>
                </Row>
            </Jumbotron>
        )
    }
}

export default ResultsPage