import React from 'react';

class Game extends React.Component {

    dif = 'medium';

    difficulty = {
        'easy': 3,
        'medium': 1.5,
        'hard': 0.8,
        'wumpus': 0.5
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

        setInterval(() => {
            this.setState({time: this.state.time + 1})
        }, 1000)
        setInterval(() => {
            this.setState({timer: this.state.timer - 0.01})
        }, 10)
    };

    componentDidUpdate = () => {
        if (this.state.timer <= 0) {
            this.setState({misses: this.state.misses+1});
            this.nextImage();
        }
    }

    render() {
        
        return (
            <div>
                <div>
                    <img width="600px" height="400px" src={this.state.image} />
                    <h2>Time:{this.state.timer.toFixed(2)}</h2>
                </div>
                <div>
                    <button onClick={this.onDuckClick}>Duck</button>
                    <button onClick={this.onMelonClick}>Watermelon</button>
                </div>
                <div>Score:{this.state.score}</div>
                <div>Misses:{this.state.misses}</div>
                <div>Time:{this.state.time}</div>
                
            </div>
        );
    }
}

export default Game;