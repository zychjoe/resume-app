import './App.css'
import React, {useState, useEffect} from 'react'
import WelcomeSpec from './WelcomeSpec.js'
import WelcomeStd from './WelcomeStd'
import users from './users.json'

function App() {

  
  let currKey = "200000"
  const user = users.find(user => user.id == currKey)

  if (user != undefined){
    return (
      <div className="App">
        <header className="App-header">
          <WelcomeSpec data={user.data} />
        </header>
      </div>
    )
  }
  else{
    return (
    <div className="App">
        <header className="App-header">
          <WelcomeStd />
        </header>
      </div>
    )
  }
  
}

export default App;
