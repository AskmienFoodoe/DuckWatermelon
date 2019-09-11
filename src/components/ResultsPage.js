import React from "react";
import axios from "axios";

import {Container, Jumbotron, Row, Col} from "react-bootstrap"

// Instantiate an axios client
const api = axios.create({
    baseURL: `https://duckwatermelon-backend.herokuapp.com/`
});

class ResultsPage extends React.Component{

    state = {
        scores: []
    }

    // Get Data
    getHighScores = async () => {
        // Query the backend and wait to get scores. Once this is terminated, 
        // update the state accordingly. 
        const highScores = await api.get("/scores")
        console.log(highScores);
        
        this.setState({scores:highScores})
    }

    componentDidMount(){
        this.getHighScores()
    }   

    render(){
        return(
            <Jumbotron>
                <Row>
                    <h1>Hello World</h1>
                </Row>
            </Jumbotron>
        )
    }
}

export default ResultsPage