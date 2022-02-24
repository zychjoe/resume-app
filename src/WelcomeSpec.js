import './WelcomeSpec.css';
import React, { Component } from 'react';

class WelcomeSpec extends Component{

    constructor(props){
        super(props)

        this.name = props.data.name
        this.logo_path = props.data.logo_path
        this.reason1 = props.data.reason1
        this.reason2 = props.data.reason2
        this.reason3 = props.data.reason3

    }
    render(){
        return <div>
            <h1>{this.name}</h1>
            <img src={this.logo_path} alt="a logo" />
            <p>{this.reason1}</p>
            <p>{this.reason2}</p>
            <p>{this.reason3}</p>
        </div>
    }
}

export default WelcomeSpec