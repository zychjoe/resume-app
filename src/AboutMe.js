import './AboutMe.css';
import React, { useState } from 'react';
import Button from './Button.js'
import Modal from './Modal.js'

function AboutMe(){
    const [whichModal, setWhichModal] = useState("none")

    const openWork = () => {
        setWhichModal("work")
    }

    const openProjects = () => {
        setWhichModal("projects")
    }
    
    const openEducation = () => {
        setWhichModal("education")
    }
    
    const openDone = () => {
        setWhichModal("done")
    }

    const closeModal = () => {
        setWhichModal("none")
    }

    switch(whichModal) {
        case ("work"):
            return <Modal title="Work Experience"
                          content={[{ "name" : "Flume" ,
                                      "description" : "This is my Flume Experience",
                                      "linkPath" : "",
                                      "linkText" : "" }]}
                          onClose={closeModal} />
        case ("projects"):
            return <Modal title="Projects"
                          content={[{ "name" : "TacoParser" ,
                                      "description" : "This is a description of TacoParser",
                                      "linkPath" : "https://github.com/zychjoe/TacoParser",
                                      "linkText" : "See the code"  },
                                    { "name" : "Ronye" ,
                                      "description" : "This is a description of Ronye",
                                      "linkPath" : "https://github.com/zychjoe/RonYe",
                                      "linkText" : "See the code"  }]}
                          onClose={closeModal} />
        case ("education"):
            return <Modal title="Education"
                          content={[{ "name" : "Northeastern University" ,
                                      "description" : "This is Northeastern.", 
                                      "linkPath" : "",
                                      "linkText" : "" },
                                    { "name" : "True Coders" ,
                                      "description" : "This is True Coders.",
                                      "linkPath" : "https://yahoo.com",
                                      "linkText" : "This will be a certificate link" }]} 
                          onClose={closeModal} />
        case ("done"):
            return <Modal title="Thank you!"
                          content={[{ "name" : "Email" ,
                                      "description" : "",
                                      "linkPath" : "mailto: zychjoe@gmail.com",
                                      "linkText" : "zychjoe@gmail.com"  },
                                    { "name" : "Phone" ,
                                      "description" : "",
                                      "linkPath" : "tel:508-728-9973",
                                      "linkText" : "508-728-9973" },
                                    { "name" : "Find the code for this app:" ,
                                      "description" : "This app was made using Javascript and React.",
                                      "linkPath" : "https://github.com/zychjoe/resume-app",
                                      "linkText" : "See the code" } ]} 
                          onClose={closeModal} />
        default:
            return (
                <div>
                    <h1>What can I tell you?</h1>
                    <br />
                    <Button text="Work Experience" onClick={openWork} />
                    <br />
                    <br />
                    <br />
                    <Button text="Personal Projects" onClick={openProjects} />
                    <br />
                    <br />
                    <br />
                    <Button text="Education" onClick={openEducation} />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button text="Done!" onClick={openDone} />
                </div>
            )
    }
}

export default AboutMe