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
                                      "img" : "" ,
                                      "description" : "As a fullstack freelacer, I implement updates and repairs on this local ISP's customer UI. Flume runs a Python front-end and a Go back-end. I report directly to the Head of Software.",
                                      "linkPath" : "https://www.flumeinternet.com/",
                                      "linkText" : "Check Flume Out" }]}
                          onClose={closeModal} />
        case ("projects"):
            return <Modal title="Projects"
                          content={[{ "name" : "TacoParser" ,
                                      "img" : <img src={require("./assets/TacoParser_Log.gif")} width="350" height="200"></img> ,
                                      "description" : "C# .NET Core application where I parse data from a csv file representing locations of US Taco Bells. I then use that data to determine which of the given locations are furthest apart. Tests are written using XUnit and results are logged.",
                                      "linkPath" : "https://github.com/zychjoe/TacoParser",
                                      "linkText" : "See the code"  },
                                    { "name" : "RonYe Conversations: Dueling APIs" ,
                                      "img" :  <img src={require("./assets/RonYe_Log.gif")} width="350" height="300"></img> ,
                                      "description" : "An exercise in API use, I’ve accessed an API with Kanye West quotes and a different API with Ron Swanson Quotes. The app runs in the command line, and allows users to chose what they believe is the funniest conversation combining the thoughts of these two dynamic characters.",
                                      "linkPath" : "https://github.com/zychjoe/RonYe",
                                      "linkText" : "See the code"  }]}
                          onClose={closeModal} />
        case ("education"):
            return <Modal title="Education"
                          content={[{ "name" : "Northeastern University" ,
                                      "img" : "" ,
                                      "description" : "The Computer Science program focuses on the fundamentals of program design, software development, computer organization, systems and networks, theories of computation, principles of languages, and advanced algorithms and data. ", 
                                      "linkPath" : "",
                                      "linkText" : "" },
                                    { "name" : "True Coders" ,
                                      "description" : "Project-based training in SQL, C#, .NET Core, Java, Git, ASP.NET MVC, HTML, CSS, and JavaScript. These skills were developed by building multiple C# and SQL projects in Visual Studio and Visual Studio Code. C# and SQL Projects were tracked in Git and GitHub for source control. Managed SQL databases using the CRUD operations in MySQL.",
                                      "linkPath" : "",
                                      "linkText" : "" }]} 
                          onClose={closeModal} />
        case ("done"):
            return <Modal title="Thank you!"
                          content={[{ "name" : "Email" ,
                                      "img" : "" ,
                                      "description" : "",
                                      "linkPath" : "mailto: zychjoe@gmail.com",
                                      "linkText" : "zychjoe@gmail.com"  },
                                    { "name" : "Phone" ,
                                      "img" : "" ,
                                      "description" : "",
                                      "linkPath" : "tel:508-728-9973",
                                      "linkText" : "508-728-9973" },
                                    { "name" : "Find the code for this app:" ,
                                      "img" : "" ,
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