import './Investigate.css';
import './Investigate.css'
import React from 'react'
import Button from './Button.js'

function Investigate(props){
    return <div>
        <h2>I'm excited about</h2>
        <h2>{props.data.name} because you:</h2>
        <ul className="reason-list">
            <li>{props.data.reason1}</li>
            <li>{props.data.reason2}</li>
            <li>{props.data.reason3}</li>
        </ul>
        <br />
        <h2>But you already know that!</h2>
        <Button text="Learn about me" onClick={props.buttonClick} />
    </div>
}

export default Investigate