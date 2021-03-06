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
                          content={[{ "img" : <img src={require("./assets/flume-logo.png")} alt="Flume Internet" width="250" height="58"></img> ,
                                      "subtitle" : "TS | React | Go | HTML | CSS",
                                      "description" : "As a fullstack freelacer, I implement updates and repairs on this local ISP's customer UI. Flume runs a Typescript front-end and a Go back-end. I report directly to the Head of Software.",
                                      "linkPath" : "https://www.flumeinternet.com/",
                                      "linkText" : "Check Flume Out" }]}
                          onClose={closeModal} />
        case ("projects"):
            return <Modal title="Projects"
                          content={[{ "name" : "Player Twordle" ,
                                      "img" : <img src={require("./assets/Player-Twordle.gif")} width="200" height="400"></img> ,
                                      "subtitle" : "JS | React | HTML | CSS | API | JEST",
                                      "description" : "My Wordle clone is for two players using the same device. The first player chooses the word and the second player has five guesses to get it right. Utilized JS and React. I mostly made it so my partner and I had something to play together once we solved the NYT crossword.",
                                      "linkPath" : "https://player-twordle.herokuapp.com",
                                      "linkText" : "Play it!",
                                      "linkPath2" : "https://github.com/zychjoe/resume-app",
                                      "linkText2" : "See the code" },
                                    { "name" : "Photo Studio Contact App" ,
                                      "img" : <img src={require("./assets/ContactApp.gif")} width="200" height="320"></img> ,
                                      "subtitle" : "JS | React | HTML | CSS",
                                      "description" : "This app was made to increase customer interaction with a small, body-positive portraiture studio. By integrating this app into the SquareSpace site and replacing the previous SquareSpace created contact form I increased user completion rates by over 30%.",
                                      "linkPath" : "https://whoyouareboudoir.com/contact",
                                      "linkText" : "See it in action"  },
                                    { "name" : "Best Buy CRUD Website" ,
                                      "img" : <img src={require("./assets/BestBuyCRUD.gif")} width="310" height="218"></img> ,
                                      "subtitle" : "C# | ASP.Net MVC | SQL | HTML",
                                      "description" : "Using a fictionalized database simulating Best Buy products, the website supports user interaction with the database. All CRUD functions are possible through a simple, cenvenient and clean user interface. ASP.Net MVC at it???s purest!",
                                      "linkPath" : "https://github.com/zychjoe/TacoParser",
                                      "linkText" : "See the code"  },
                                    { "name" : "RonYe Conversations: Dueling APIs" ,
                                        "img" :  <img src={require("./assets/RonYe_Log.gif")} width="310" height="270"></img> ,
                                        "subtitle" : "C# | .NET Core | APIs | JSON",
                                        "description" : "An exercise in API use, I???ve accessed an API with Kanye West quotes and a different API with Ron Swanson Quotes. The app runs in the command line, and allows users to chose what they believe is the funniest conversation combining the thoughts of these two dynamic characters.",
                                        "linkPath" : "https://github.com/zychjoe/RonYe",
                                        "linkText" : "See the code"  },
                                    { "name" : "TacoParser" ,
                                      "img" : <img src={require("./assets/TacoParser_Log.gif")} width="310" height="185"></img> ,
                                      "subtitle" : "C# | .NET Core | xUnit | Geolocater",
                                      "description" : "C# .NET Core application where I parse data from a csv file representing locations of US Taco Bells. I then use that data to determine which of the given locations are furthest apart. Tests are written using XUnit and results are logged.",
                                      "linkPath" : "https://github.com/zychjoe/TacoParser",
                                      "linkText" : "See the code"  }]}
                          onClose={closeModal} />
        case ("education"):
            return <Modal title="Education"
                          content={[{ "img" : <img src={require("./assets/NEU.png")} alt="Northeastern Univeristy" width="300" height="106"></img>,
                                      "subtitle" : "Computer Science",
                                      "description" : "The Computer Science program focuses on the fundamentals of program design, software development, computer organization, systems and networks, theories of computation, principles of languages, and advanced algorithms and data. ", 
                                      "linkPath" : "",
                                      "linkText" : "" },
                                    { "img" : <img src={require("./assets/truecoders.png")} alt="True Coders" width="300" height="149"></img>,
                                      "subtitle" : "Advanced Technical Training",
                                      "description" : "Project-based training in SQL, C#, .NET Core, Java, Git, ASP.NET MVC, HTML, CSS, and JavaScript. These skills were developed by building multiple C# and SQL projects in Visual Studio and Visual Studio Code. C# and SQL Projects were tracked in Git and GitHub for source control. Managed SQL databases using the CRUD operations in MySQL.",
                                      "linkPath" : "",
                                      "linkText" : "" }]} 
                          onClose={closeModal} />
        case ("done"):
            return <Modal title="Thank you!"
                          content={[{ "img" : <img src={require("./assets/email.png")} alt="Email" width="40" height="32"></img>,
                                      "description" : "",
                                      "linkPath" : "mailto: zychjoe@gmail.com",
                                      "linkText" : "zychjoe@gmail.com"  },
                                    { "img" : <img src={require("./assets/phone.png")} alt="Phone" width="40" height="38"></img>,
                                      "description" : "",
                                      "linkPath" : "tel:508-728-9973",
                                      "linkText" : "508-728-9973" },
                                    { "name" : "Find the code for this app:" ,
                                      "img" : <img src={require("./assets/code.png")} alt="Code" width="40" height="32"></img>,
                                      "subtitle" : "JS | React | HTML | CSS",
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