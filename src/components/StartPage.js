import React from 'react';
import {Link} from 'react-router-dom'

// Importing style dependencies
import {Button, Row, Col, Image, Jumbotron} from "react-bootstrap";

const StartPage = () => {

    return (
        <div>
            <Jumbotron >
                <Row className = "justify-content-md-center" >
                    <h1 > <strong>DUCKS AND WATERMELONS </strong></h1>
                </Row>

                <Row style = {{marginTop:"100px"}} className = "justify-content-md-center">
                    <h3>If you see a duck, click on "Duck"! If you see a watermelon, click on "Watermelon"!</h3>
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

export default StartPage;