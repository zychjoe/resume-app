import React, {useState} from 'react'
import './Modal.css'

function Modal(props){
    
    
    return (
        <div className="modal">
            <button className="close-button" onClick={props.onClose}>X</button>
            <h1><u>{props.title}</u></h1>
            {props.content.map(elem => <div className="content">
                                            <h3>{elem.name}</h3>
                                            {elem.img}
                                            <p>{elem.description}</p>
                                            <a target='_blank' href={elem.linkPath}>{elem.linkText}</a>
                                       </div>
            )}
        </div>
    )
}

export default Modal