import React from 'react';
import {Link} from 'react-router-dom'

// Importing style dependencies
import {Button, Row, Col, Image, Jumbotron, Form} from "react-bootstrap";

class StartPage extends React.Component {

    state = {diff: 'Easy', name: ''};

    onInputChange = (event) => {
        
        this.setState({name: event.target.value}, () => {this.props.handleProps(this.state.diff, this.state.name)});
        
    }

    onSelectChange = (event) => {
        
        this.setState({diff: event.target.value}, () => {this.props.handleProps(this.state.diff, this.state.name)});
        
    }

    componentDidMount = () => {
        this.props.handleProps(this.state.diff, this.state.name);
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
    
                    

                    <Row style = {{marginTop:"40px", marginLeft:"150px", marginRight:"150px"}} className = "justify-content-md-center">
                        <Col>
                            <label>Name</label>
                            <Form.Control value={this.state.name} placeholder="Enter Your Name!" onChange={this.onInputChange} />  
                        </Col>
                        <Col>
                            <label>Difficulty</label>
                            <Form.Control as="select" value={this.state.diff} onChange={this.onSelectChange}>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                                <option>Wumpus</option>
                            </Form.Control>
                        </Col>
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