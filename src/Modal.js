import React from 'react'
import './Modal.css'

function Modal(props){
    
    const imgDisplayer = (img) => {
        if(img == ""){
            return
        }
        else{
            return (
                <div className="imageVisible">
                    {img}
                    <br />
                </div>
            )
        }
    }
    
    return (
        <div className="modal">
            <input type="image" 
                   src={require("./assets/close-modal.png")}
                   className="close-button"
                   onClick={props.onClose} />
            <h1><u>{props.title}</u></h1>
            {props.content.map(elem => <div className="content">
                                            <h3>{elem.name}</h3>
                                            {imgDisplayer(elem.img)}
                                            <p className="subtitle">{elem.subtitle}</p>
                                            <p>{elem.description}</p>
                                            <a target='_blank' href={elem.linkPath}>{elem.linkText}</a>
                                            <br />
                                            <br />
                                            <a target='_blank' href={elem.linkPath2}>{elem.linkText2}</a>
                                       </div>
            )}
        </div>
    )
}

export default Modal