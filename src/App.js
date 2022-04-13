import './App.css'
import React, {useState} from 'react'
import users from './users.json'
import WelcomeSpec from './WelcomeSpec.js'
import WelcomeStd from './WelcomeStd.js'
import Investigate from './Investigate.js'
import AboutMe from './AboutMe.js'



function App() {

  const [progress, setProgress] = useState("default")
  const user = users.find(u => u.id == "")
  const [isUser, setIsUser] = useState(user != undefined)
  
  const toInvestigate = () => {
    setProgress("investigate")
  }
  
  const toAboutMe = () => {
    setProgress("about")
    setIsUser(false)
  }

  
  if (isUser && progress == "investigate"){
    return (
      <div className="App">
          <Investigate data={user.data} buttonClick={toAboutMe} />
      </div>
    )
  }

  else if (isUser){
    return (
      <div className="App">
        <WelcomeSpec name={user.data.name} logo_path={user.data.logo_path} buttonClick={toInvestigate} />
      </div>
    )
  }

  else if (progress == "about"){
      return (
      <div className="App">
          <AboutMe />
      </div>
    )
  }

  else {
    return (
      <div className="App">
          <WelcomeStd buttonClick={toAboutMe} />
      </div>
    )
  }
}

export default App;

//BG Green 003527