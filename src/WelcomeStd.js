import './WelcomeStd.css';
import React from 'react';
import Button from './Button.js';

function WelcomeStd(props){
    return <div>
        <h1>Hello!</h1>
        <p>I'm so glad you're here.</p>
        <br />
        <p>My name is</p>
        <h2>Joe Zych</h2>
        <p>and I'd like to code for you!</p>
        <br />
        <Button text="Learn about me" onClick={props.buttonClick} />
    </div>
}

export default WelcomeStd