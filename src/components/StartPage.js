import React from 'react';
import {Link} from 'react-router-dom'


const StartPage = () => {

    return (
        <div>
            <div>
                <h1>DUCKS AND WATERMELONS</h1>
                <p>If you see a duck, click on "Duck"! If you see a watermelon, click on "Watermelon"!</p>
            </div>
    
            <div><Link to="/game">Press to Start!</Link></div>
        </div>
        
    );
}

export default StartPage;