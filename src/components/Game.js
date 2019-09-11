import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

// Importing style dependencies
import {Button, Row, Col, Image, Jumbotron} from "react-bootstrap";

// Instantiate an axios client
const api = axios.create({
    baseURL: `https://duckwatermelon-backend.herokuapp.com/`
});


class Game extends React.Component {


    dif = this.props.diff;
    name = this.props.name==='' ? 'Player' : this.props.name;    
    timerID;

    difficulty = {
        'Easy': 3.0,
        'Medium': 1.5,
        'Hard': 0.8,
        'Wumpus': 0.5
    }

    state = 
        {time: 0, 
        timer: 0, 
        score: 0, 
        misses: 0, 
        image: '', 
        type: null,
        gameOver: false};
    
    postScore = async () =>{
        api.post("/scores",{
            "name": this.name,
            "diff": this.dif,
            "score": this.state.score
        })
        .then((r) => {console.log(r)})
        .catch((e) => {console.log(e)});
    }

    getRandomImage = () => {
        if(!this.state.gameOver){
            const imgType = Math.floor(Math.random() * 2) + 1;
            this.setState({type: imgType});
            const n = Math.floor(Math.random() * 10) + 1;
            return `${process.env.PUBLIC_URL}/${imgType}_${n}.jpg`;  
        }
    }

    nextImage = () => {
        this.setState({image: this.getRandomImage(), timer: this.difficulty[this.dif]});
    }

    onDuckClick = () => {
        if (this.state.type === 1) {
            this.setState({score: this.state.score+1});
            this.nextImage();
        } else {
            this.setState({misses: this.state.misses+1});
            this.nextImage();
        }
    };

    onMelonClick = () => {
        if (this.state.type === 2) {
            this.setState({score: this.state.score+1});
            this.nextImage();
        } else {
            this.setState({misses: this.state.misses+1});
            this.nextImage();
        }
    };


    componentDidMount = () => {
        this.setState({image: this.getRandomImage()});

        this.timerID = setInterval(() => {
            this.setState({time: this.state.time + 0.01, timer: this.state.timer - 0.01})
        }, 10)
    };

    componentDidUpdate = () => {
        if (this.state.timer <= 0 && !this.state.gameOver) {
            this.setState({misses: this.state.misses+1});
            this.nextImage();
        }

        if(this.state.misses >= 5 && !this.state.gameOver){
            this.setState({gameOver:true});
        }

        if(this.state.gameOver){
            clearInterval(this.timerID);
            this.postScore();
            
        }
        
    }

    componentWillUnmount = () => {
        clearInterval(this.timerID);
    }

    render() {
        
        if (!this.state.gameOver) {
            return (
                <Jumbotron>
                    <Row className = "justify-content-md-center" style={{marginBottom:"20px"}}>
                        <Col style={{textAlign:"right"}}>
                        <h1><strong>Time:</strong></h1>
                        </Col>
                        <Col>
                            <h1 style = {{color: `#${Math.floor((this.difficulty[this.dif]-this.state.timer)*255/this.difficulty[this.dif]).toString(16).padStart(2,'0')}0000`}}>
                            <strong>{` ${this.state.timer.toFixed(2)}`}</strong>
                            </h1>
                        </Col>
                            
                        
                    </Row>
                    <Row  className = "justify-content-center" style = {{marginBottom:"20px"}}>
                        <Image src={this.state.image} style={{height: 2*window.innerHeight/5, border:"12px solid #F3969A"}} fluid />
                    </Row>
                    <Row>
                        <Col>
                            <Button onClick={this.onDuckClick} size = "lg" className="btn btn-warning" block>Duck</Button>
                        </Col>
                        <Col>
                            <Button onClick={this.onMelonClick} size = "lg" block>Watermelon</Button>
                        </Col>
                    </Row>
                    <Row  style = {{marginTop:"20px"}}>
                        <Col style = {{textAlign:"right"}}>
                            <h2 >Score: </h2>
                        </Col>
                        <Col style = {{textAlign:"left"}}>
                            <h2>{this.state.score}</h2>
                        </Col>
                    </Row>
                    <Row  style = {{marginTop:"20px"}}>
                        <Col style = {{textAlign:"right"}}>
                            <h2>Misses: </h2>
                        </Col>
                        <Col style = {{textAlign:"left"}}>
                            <h2>{this.state.misses}</h2>
                        </Col>
                    </Row>
                    <Row  style = {{marginTop:"20px"}}>
                        <Col style = {{textAlign:"right"}}>
                            <h2 >Time: </h2>
                        </Col>
                        <Col style = {{textAlign:"left"}}>
                            <h2>{this.state.time.toFixed(0)}</h2>
                        </Col>
                    </Row>
                </Jumbotron>
            );
        } else {

            return (
                <Jumbotron>
                    <Row className="justify-content-md-center" style={{marginTop: "15px", marginBottom: "50px"}}>
                        <h1><strong>GAME OVER!</strong></h1>
                    </Row>

                    <Row className="justify-content-md-center" style={{marginBottom: "30px"}}>
                        <h2>Your Final Score Was:</h2>
                    </Row>

                    <Row className="justify-content-md-center" style={{marginBottom: "50px"}}>
                        <h1 style={{fontSize: "144px"}}><strong>{this.state.score}</strong></h1>
                    </Row>

                    <Row>
                        <Col>
                            <Link to="/">
                                <Button size = "lg"  style = {{ paddingTop:"15px",  paddingBottom:"15px"}} block>
                                        <span style ={{color:"white"}}>Play Again</span>
                                </Button>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/results">
                                <Button size = "lg"  style = {{ paddingTop:"15px",  paddingBottom:"15px"}} block>
                                        <span style ={{color:"white"}}>Highscores</span>
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Jumbotron>
            );
        }
        
    }
}



export default Game;