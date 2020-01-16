import React from 'react';

function Scorebar(props) {
    
        return (
        <div>
            <div className="row">
                <span>HighScore = {props.highScore}</span>
                <span>clicked Message = {props.clickedMessage}</span>
                <span>click Guess = {props.correctGuess}</span>
            </div>
        </div>
  );
}



export default Scorebar;