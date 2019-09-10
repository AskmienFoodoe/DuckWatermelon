import React from 'react';

import {Button, Row, Col, Image, Jumbotron} from "react-bootstrap";

class Game extends React.Component {

    dif = this.props.diff;
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
        type: null};

    getRandomImage = () => {
        const imgType = Math.floor(Math.random() * 2) + 1;
        this.setState({type: imgType});
        const n = Math.floor(Math.random() * 10) + 1;
        return `${process.env.PUBLIC_URL}/${imgType}_${n}.jpg`;  
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
        if (this.state.timer <= 0) {
            this.setState({misses: this.state.misses+1});
            this.nextImage();
        }
        
    }

    componentWillUnmount = () => {
        clearInterval(this.timerID);
    }

    render() {
        
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
                        <h2 >Misses: </h2>
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
    }
}

export default Game;