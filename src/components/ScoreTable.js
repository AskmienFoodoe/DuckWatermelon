import React from 'react';
import { Table } from 'react-bootstrap';



const ScoreTable = (props) => {

    props.scores.forEach((score, index) => {
       score.place = index+1;
        
    });

    const scores = props.scores.map((score) => {
        return (
            <tr key={score.id}>
                <td><strong>{score.place}</strong></td>
                <td>{score.name}</td>
                <td>{score.score}</td>
            </tr>
        );
    })

    return (
        <Table style={{textAlign: "center"}}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {scores}
            </tbody>
        </Table>
    );
};

export default ScoreTable