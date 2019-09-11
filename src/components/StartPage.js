import React from 'react';
import {Link} from 'react-router-dom'

// Importing style dependencies
import {Button, Row, Col, Image, Jumbotron, Form} from "react-bootstrap";

class StartPage extends React.Component {

    state = {diff: 'Easy'};

    onSelectChange = (event) => {
        
        this.setState({diff: event.target.value}, () => {this.props.handleDiff(this.state.diff)});
        
    }

    componentDidMount = () => {
        this.props.handleDiff(this.state.diff)
    }

    render = () => {
        return (
            <div>
                <Jumbotron>
                    <Row className = "justify-content-md-center" >
                        <h1 > <strong>DUCKS AND WATERMELONS </strong></h1>
                    </Row>
    
                    <Row style = {{marginTop:"100px"}} className = "justify-content-md-center">
                        <h3 style={{textAlign: "center"}}>If you see a duck, click on "Duck"! If you see a watermelon, click on "Watermelon"! Try not to let time run out!</h3>
                    </Row>
    
                    <Row style = {{marginTop:"40px", marginLeft:"450px", marginRight:"450px"}} className = "justify-content-md-center">
                        <label>Difficulty</label>
                        <Form.Control as="select" value={this.state.diff} onChange={this.onSelectChange}>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                            <option>Wumpus</option>
                        </Form.Control>
                    </Row>
            
                    <Row style = {{marginTop:"40px", marginLeft:"300px", marginRight:"300px"}}  className = "justify-content-md-center">
                        <Link to="/game">
                            <Button size = "lg"  style = {{ paddingTop:"15px",  paddingBottom:"15px"}} block>
                                    <span style ={{color:"white"}}>Press to Start!</span>
                            </Button>
                        </Link>
                    </Row>
                </Jumbotron>
            </div>
            
        );
    }
    
}

export default StartPage;