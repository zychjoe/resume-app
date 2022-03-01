import './WelcomeSpec.css';
import React from 'react';
import Button from './Button.js';

function WelcomeSpec(props){
    return <div>
        <h1>Woah! You work at</h1>
        <img className="logo" src={props.logo_path} alt={props.name} /><h1>?!?!</h1>
        <br />
        <p>That's where I want to work!</p>
        <br />
        <Button text="Investigate This Coincidence" onClick={props.buttonClick} />
    </div>
}

export default WelcomeSpec